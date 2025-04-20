import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { contracts, chainAdapters } from "signet.js";

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

export async function GET() {
  const mbMetadataHeader = (await headers()).get("mb-metadata");
  const mbMetadata: { accountId: string } =
    mbMetadataHeader && JSON.parse(mbMetadataHeader);

  const { accountId } = mbMetadata || {};
  console.log("accountId", accountId);

  const { address } = await bitcoin.deriveAddressAndPublicKey(
    accountId as string,
    "bitcoin-1"
  );

  const btcAddress = address;

  const btcBalance = await bitcoin.getBalance(btcAddress);

  if (!accountId) {
    return NextResponse.json(
      {
        error: "Unable to find user data in the request",
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ btcBalance, btcAddress });
}
