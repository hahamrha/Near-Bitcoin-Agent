import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  Bitcoin as SignetBTC,
  BTCRpcAdapters,
  utils,
  // RSVSignature,
  // MPCSignature,
  // BTCUnsignedTransaction,
} from "signet.js";

const CONTRACT = new utils.chains.near.contract.NearChainSignatureContract({
  networkId: "mainnet",
  contractId: "v1.signer",
});

const btcRpcAdapter = new BTCRpcAdapters.Mempool("https://mempool.space/api");

const Bitcoin = new SignetBTC({
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

  const { address } = await Bitcoin.deriveAddressAndPublicKey(
    accountId as string,
    "bitcoin-1"
  );

  const btcAddress = address;

  const btcBalance = await Bitcoin.getBalance(btcAddress);

  if (!accountId) {
    return NextResponse.json(
      {
        error: "Unable to find connected NEAR account Id in the request",
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ btcBalance, btcAddress });
}
