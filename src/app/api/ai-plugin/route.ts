import { ACCOUNT_ID, PLUGIN_URL } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
  const pluginData = {
    openapi: "3.0.0",
    info: {
      title: "Bitcoin Assistant",
      description: "API for the Bitcoin Agent",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://bitcoin-agent.xyz",
      },
    ],
    "x-mb": {
      "account-id": ACCOUNT_ID,
      assistant: {
        name: "Bitcoin Assistant",
        description: `An assistant that gives information about the user's BTC wallet address and BTC balance, creates a Bitcoin txn and also helps with deposit and swap for Bitcoin. 
          Supports deposit of assets from any wallet and swapping into BTC enabled by NEAR Intents.`,
        instructions: `You create bitcoin mainnet txns powered by chain signatures and send them on btc mainnet, tell the user's near account id and get their BTC balance. 
          You do not help create native NEAR transactions and only help in creating bitcoin transactions. 
          For bitcoin transactions, first generate a transaction payload using the endpoint /api/tools/create-btc-mpc-txn, 
          then explicitly use the 'generate-transaction' tool to sign received payload using NEAR account. 
          After this txn is signed, use 'api/tools/send-btc-txn' to relay it to BTC mainnet, make sure to provide the 'txHash' (received from signed near txn), 'btcReceiver' address, 'btcAmountInSatoshi' parameters when calling /api/tools/send-btc-txn. 
          If any parameter is not provided, then ask for it explicitly.
          You can also help users deposit assets from any wallet and swap them into BTC, enabled by NEAR Intents. This supports chain-agnostic asset input, seamless settlement via NEAR Intents, and eliminates the need for bridging.`,
        tools: [{ type: "generate-transaction" }, { type: "sign-message" }],
        image:
          "https://pbs.twimg.com/profile_images/1912478540060041216/21DZcXns_400x400.jpg",
        categories: ["Bitcoin", "DeFi"],
      },
    },
    paths: {
      // ... rest of your paths unchanged
      "/api/tools/get-user": {
        /* ... */
      },
      "/api/tools/get-btc-balance": {
        /* ... */
      },
      "/api/tools/create-btc-mpc-txn": {
        /* ... */
      },
      "/api/tools/send-btc-txn": {
        /* ... */
      },
    },
  };

  return NextResponse.json(pluginData);
}
