import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { connect } from "near-api-js";
import {
  ExecutionOutcomeWithId,
  FinalExecutionOutcome,
} from "near-api-js/lib/providers";
import {
  contracts,
  chainAdapters,
  RSVSignature,
  MPCSignature,
  // fix: convert toRSV function
} from "signet.js";

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

export async function GET(request: Request) {
  try {
    const mbMetadataHeader = (await headers()).get("mb-metadata");
    const mbMetadata: { accountId: string } =
      mbMetadataHeader && JSON.parse(mbMetadataHeader);
    const { accountId } = mbMetadata || {};

    const { searchParams } = new URL(request.url);
    // const accountId = searchParams.get("accountId");
    const btcReceiverAddress = searchParams.get("btcReceiver");
    const btcAmountInSatoshi = searchParams.get("btcAmountInSatoshi");
    const txHash = searchParams.get("txHash");

    console.log("btcReceiverAddress", btcReceiverAddress);
    console.log("btcAmountInSatoshi", btcAmountInSatoshi);
    console.log("txHash", txHash);

    if (!btcReceiverAddress || !btcAmountInSatoshi || !txHash) {
      console.log(
        `btcReceiver: ${btcReceiverAddress}\nbtcAmountInSatoshi: ${btcAmountInSatoshi}\ntxHash: ${txHash}`
      );

      return NextResponse.json(
        {
          error:
            '"btcReceiver", "btcAmountInSatoshi" and "txHash" are required parameters',
        },
        { status: 400 }
      );
    }

    // Get the signature from the txHash and send it to BTC mainnet
    const connectionConfig = {
      networkId: "mainnet",
      nodeUrl: "https://rpc.mainnet.near.org",
    };

    const near = await connect(connectionConfig);
    const txFinalOutcome = await near.connection.provider.txStatus(
      txHash,
      accountId as string,
      "FINAL"
    );

    // get SuccessValue from receipts_outcome and convert base64 to string
    const decodedSuccessValue = getDecodedSuccessValue(
      txFinalOutcome.receipts_outcome
    );
    const mpcSignature: MPCSignature = JSON.parse(
      decodedSuccessValue as string
    );
    //fix: convert MPC signature to RSV signature
    // const rsvSignatures: RSVSignature[] = [toRSV(mpcSignature)];
    const rsvSignatures: RSVSignature[] = [];

    // get sender btc address
    const { address: btcSenderAddress, publicKey: btcSenderPublicKey } =
      await bitcoin.deriveAddressAndPublicKey(accountId as string, "bitcoin-1");

    // create MPC payload and txn
    const { transaction } = await bitcoin.prepareTransactionForSigning({
      publicKey: btcSenderPublicKey,
      from: btcSenderAddress,
      to: btcReceiverAddress,
      value: btcAmountInSatoshi.toString(),
    });

    const signedTransaction = bitcoin.finalizeTransactionSigning({
      transaction,
      rsvSignatures,
    });

    const btcTxnHash = await bitcoin.broadcastTx(signedTransaction);

    return NextResponse.json({ txHash: btcTxnHash }, { status: 200 });
  } catch (error) {
    console.error("Error generating EVM transaction:", error);
    return NextResponse.json(
      { error: "Failed to generate EVM transaction" },
      { status: 500 }
    );
  }
}

const getDecodedSuccessValue = (receiptsOutcome: ExecutionOutcomeWithId[]) => {
  let successReceiptId: string | null = null;
  let successValue = null;

  // Find the SuccessReceiptId
  receiptsOutcome.forEach((receipt) => {
    //@ts-ignore
    if (receipt.outcome.status.SuccessReceiptId) {
      //@ts-ignore
      successReceiptId = receipt.outcome.status.SuccessReceiptId;
    }
  });

  if (!successReceiptId) return null; // Return null if no SuccessReceiptId is found

  // Find the SuccessValue corresponding to the SuccessReceiptId
  receiptsOutcome.forEach((receipt) => {
    if (
      receipt.id === successReceiptId &&
      //@ts-ignore
      receipt.outcome.status.SuccessValue !== undefined
    ) {
      //@ts-ignore
      successValue = receipt.outcome.status.SuccessValue;
    }
  });

  if (!successValue) return null; // Return null if no SuccessValue is found

  // Decode from Base64 to String
  try {
    return atob(successValue); // Decode Base64
  } catch (error) {
    console.error("Error decoding Base64:", error);
    return null;
  }
};
