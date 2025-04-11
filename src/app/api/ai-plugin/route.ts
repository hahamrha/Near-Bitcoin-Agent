import { ACCOUNT_ID } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
  const pluginData = {
    openapi: "3.0.0",
    info: {
      title: "Bitcoin Agent",
      description: "API for the Bitcoin Agent",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://bitcoin-bitte-agent.vercel.app",
      },
    ],
    "x-mb": {
      "account-id": ACCOUNT_ID,
      assistant: {
        name: "Bitcoin Agent",
        description:
          "An assistant that answers with blockchain information, tells the user's near account id, show BTC wallet address and BTC balance, creates a Bitcon txn that utilizes near chain signatures, sends signed MPC transaction on bitcoin mainnet and flips coins.",
        instructions:
          "You create near txns powered by chain signatures and send them on btc mainnet, give blockchain information, tell the user's near account id, get BTC balance and flip coins. For blockchain transactions, first generate a transaction payload using the endpoint /api/tools/create-btc-mpc-txn, then explicitly use the 'generate-transaction' tool to sign received payload using NEAR account. After this txn is signed, use 'api/tools/send-btc-txn' to relay it to BTC mainnet, make sure to provide the 'txHash' (received from signed near txn), 'btcReceiver' address, 'btcAmountInSatoshi' parameters when calling /api/tools/send-btc-txn. If any parameter is not provided, then ask for it explicitly.",
        tools: [{ type: "generate-transaction" }, { type: "sign-message" }],
        image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
        categories: ["Bitcoin", "DeFi"],
      },
    },
    paths: {
      // TEST path
      "/api/tools/coinflip": {
        get: {
          summary: "Coin flip",
          description: "Flip a coin and return the result (heads or tails)",
          operationId: "coinFlip",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      result: {
                        type: "string",
                        description:
                          "The result of the coin flip (heads or tails)",
                        enum: ["heads", "tails"],
                      },
                    },
                  },
                },
              },
            },
            "500": {
              description: "Error response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        description: "Error message",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      // DONE
      "/api/tools/get-user": {
        get: {
          summary: "get user information",
          description: "Respond with user account ID and BTC address",
          operationId: "get-user",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      accountId: {
                        type: "string",
                        description: "The user's account ID",
                      },
                      btcAddress: {
                        type: "string",
                        description: "The user's MPC BTC address",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  return NextResponse.json(pluginData);
}
