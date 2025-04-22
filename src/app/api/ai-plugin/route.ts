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
        url: PLUGIN_URL,
      },
    ],
    "x-mb": {
      "account-id": ACCOUNT_ID,
      assistant: {
        name: "Bitcoin Assistant",
        description:
          "An assistant that gives information about the user's near account id, show BTC wallet address and BTC balance, creates a Bitcon txn that utilizes near chain signatures and send that signed MPC transaction on bitcoin mainnet",
        instructions:
          "You create near txns powered by chain signatures and send them on btc mainnet, tell the user's near account id and get their BTC balance . For blockchain transactions, first generate a transaction payload using the endpoint /api/tools/create-btc-mpc-txn, then explicitly use the 'generate-transaction' tool to sign received payload using NEAR account. After this txn is signed, use 'api/tools/send-btc-txn' to relay it to BTC mainnet, make sure to provide the 'txHash' (received from signed near txn), 'btcReceiver' address, 'btcAmountInSatoshi' parameters when calling /api/tools/send-btc-txn. If any parameter is not provided, then ask for it explicitly.",
        tools: [{ type: "generate-transaction" }, { type: "sign-message" }],
        image:
          "https://pbs.twimg.com/profile_images/1912478540060041216/21DZcXns_400x400.jpg",
        categories: ["Bitcoin", "DeFi"],
      },
    },
    paths: {
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
                        description: "The user's Near account ID",
                      },
                      btcAddress: {
                        type: "string",
                        description: "The user's BTC address",
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
      "/api/tools/get-btc-balance": {
        get: {
          operationId: "get-btc-balance",
          summary: "Get BTC balance",
          description: "Respond with BTC address and balance",
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      btcBalance: {
                        type: "string",
                        description: "The current BTC balance of the user",
                      },
                      btcAddress: {
                        type: "string",
                        description: "The user's BTC address",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
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
      "/api/tools/create-btc-mpc-txn": {
        get: {
          operationId: "create-btc-mpc-txn",
          summary:
            "Creates a NEAR txn that utilizes near chain signatures to send transaction on bitcoin mainnet",
          description:
            "Generates a NEAR transaction payload for MPC contract to send bitcoin on bitcoin mainnet. Recieved payload from this tool can be used directly in the generate-transaction tool.",
          parameters: [
            {
              name: "btcReceiver",
              in: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "The Bitcon mainnet wallet address of receiver",
            },
            {
              name: "btcAmountInSatoshi",
              in: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "The amount BTC in satoshi to transfer",
            },
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      transactionPayload: {
                        type: "object",
                        properties: {
                          signerId: {
                            type: "string",
                            description: "The signer's NEAR account ID",
                          },
                          receiverId: {
                            type: "string",
                            description: "The receiver's NEAR account ID",
                          },
                          actions: {
                            type: "array",
                            items: {
                              type: "object",
                              properties: {
                                type: {
                                  type: "string",
                                  description:
                                    "The type of action (e.g., 'Transfer')",
                                },
                                params: {
                                  type: "object",
                                  properties: {
                                    deposit: {
                                      type: "string",
                                      description:
                                        "The amount to transfer in yoctoNEAR",
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
                },
              },
            },
            "400": {
              description: "Bad request",
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
      "/api/tools/send-btc-txn": {
        get: {
          operationId: "send-btc-txn",
          summary: "Send the signed payload to BTC mainnet",
          description:
            "Send signed transaction to BTC mainnet. The signature is received from the txHash of the signed NEAR transaction. Other parameters are the BTC receiver address, BTC amount in satoshi.",
          parameters: [
            {
              name: "btcReceiver",
              in: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "The BTC address of the receiver",
            },
            {
              name: "btcAmountInSatoshi",
              in: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "The amount of BTC to transfer in satoshi",
            },
            {
              name: "txHash",
              in: "query",
              required: true,
              schema: {
                type: "string",
              },
              description: "The txHash of the signed txn from near",
            },
          ],
          responses: {
            "200": {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      txHash: {
                        type: "string",
                        description:
                          "The txHash of the txn relayed to BTC mainnet",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
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
            "500": {
              description: "Server error",
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
    },
  };

  return NextResponse.json(pluginData);
}
