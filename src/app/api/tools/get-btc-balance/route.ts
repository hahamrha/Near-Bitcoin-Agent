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

type BtcBalance = {
  balance: bigint;
  decimals: number;
};

export async function GET(request: Request) {
  // const mbMetadataHeader = (await headers()).get("mb-metadata");
  // const mbMetadata: { accountId: string } =
  //   mbMetadataHeader && JSON.parse(mbMetadataHeader);

  // const { accountId } = mbMetadata || {};
  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get("accountId");
  console.log("accountId", accountId);

  const { address } = await bitcoin.deriveAddressAndPublicKey(
    accountId as string,
    "bitcoin-1"
  );

  const btcAddress = address;

  const btcBalance: BtcBalance = await bitcoin.getBalance(btcAddress);

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

  // serialize bigint to string
  const serializedBalance = BigInt(btcBalance.balance).toString();

  return NextResponse.json(
    { btcBalance: serializedBalance, btcAddress: btcAddress },
    { status: 200 }
  );
}
