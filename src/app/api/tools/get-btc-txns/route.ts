import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { contracts, chainAdapters } from "signet.js";
import { Redis } from "@upstash/redis";

const CONTRACT = new contracts.near.ChainSignatureContract({
  networkId: "mainnet",
  contractId: "v1.signer",
});

const btcRpcAdapter = new chainAdapters.btc.BTCRpcAdapters.Mempool(
  "https://mempool.space/api"
);

const bitcoin = new chainAdapters.btc.Bitcoin({
  network: "mainnet",
  contract: CONTRACT,
  btcRpcAdapter,
});

// setup redis
const redis = new Redis({
  url: process.env.REDIS_URL as string,
  token: process.env.UPSTASH_PASSWORD as string,
});

const CLIENT_ID: string = process.env.BLOCKSTREAM_CLIENT_ID as string;
const CLIENT_SECRET: string = process.env.BLOCKSTREAM_CLIENT_SECRET as string;

export async function GET(request: Request) {
  try {
    const mbMetadataHeader = (await headers()).get("mb-metadata");
    const mbMetadata: { accountId: string } =
      mbMetadataHeader && JSON.parse(mbMetadataHeader);

    const { accountId } = mbMetadata || {};

    if (!accountId) {
      return NextResponse.json(
        {
          error: "Unable to find user data in the request",
        },
        {
          status: 400,
        }
      );
    }

    const { address } = await bitcoin.deriveAddressAndPublicKey(
      accountId as string,
      "bitcoin-1"
    );

    const btcAddress = address;

    const accessToken = await getTokenFromRedis();
    if (!accessToken) {
      return NextResponse.json(
        {
          error: "Failed to retrieve access token",
        },
        {
          status: 500,
        }
      );
    }

    const response = await getDataFromBlockstreamApi(
      accessToken as string,
      btcAddress
    );

    return NextResponse.json(
      {
        txns: response,
        btcAddress: btcAddress,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "An unexpected error occurred while getting transactions",
      },
      {
        status: 500,
      }
    );
  }
}

async function getTokenFromRedis() {
  try {
    let token = await redis.get("blockstream_token");
    let timestamp = await redis.get("blockstream_token_expiry");

    switch (true) {
      case !token || !timestamp:
        token = await refreshToken();
        break;
      case Date.now() - Number(timestamp) > 240000:
        token = await refreshToken();
        break;
      default:
        break;
    }
    return token;
  } catch (error) {
    console.error("Error retrieving token from Redis:", error);
    throw new Error("Failed to retrieve token from Redis");
  }
}

async function refreshToken() {
  try {
    const url =
      "https://login.blockstream.com/realms/blockstream-public/protocol/openid-connect/token";

    const params = new URLSearchParams();

    params.append("client_id", CLIENT_ID);
    params.append("client_secret", CLIENT_SECRET);
    params.append("grant_type", "client_credentials");
    params.append("scope", "openid");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();
    await redis.set("blockstream_token", data.access_token);
    await redis.set("blockstream_token_expiry", Date.now());
    return data.access_token;
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get transaction" },
      { status: 500 }
    );
  }
}

async function getDataFromBlockstreamApi(
  accessToken: string,
  btcAddress: string
) {
  const url = `https://enterprise.blockstream.info/api/address/${btcAddress}/txs`;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Assuming the response is JSON
    return data;
  } catch (error) {
    console.error("Error fetching data from Blockstream API:", error);
    throw new Error("Failed to fetch data from Blockstream API");
  }
}
