"use client";
import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NearContext } from "@/context/context";
import { parseBitcoinTransaction } from "@/lib/parseBitcoinTransactions";
import { ParsedTransaction, Transaction } from "@/lib/types";

const TransactionHistory = ({ btcPrice }: { btcPrice: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [parsedTxns, setParsedTxns] = useState<ParsedTransaction[]>([]);

  // NEAR Context
  const { wallet, signedAccountId } = useContext(NearContext);

  // Filter transactions for sent and received tabs
  const sentTransactions = parsedTxns.filter((tx) => tx.type === "sent");
  const receivedTransactions = parsedTxns.filter(
    (tx) => tx.type === "received"
  );
  // Format functions
  const formatHash = (hash: string) => {
    return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 10)}...${address.substring(
      address.length - 8
    )}`;
  };

  useEffect(() => {
    setIsLoading(true);
    if (signedAccountId) {
      loadData();
    } else {
      setIsLoading(false);
    }
  }, [signedAccountId]);

  async function loadData() {
    await getTransactions(signedAccountId);
    setIsLoading(false);
  }

  async function getTransactions(signedAccountId: string) {
    // make api call to /api/tools/get-user
    const mbMetadata = {
      accountId: signedAccountId, // Replace with actual value
    };

    const response = await fetch("/api/tools/get-btc-txns", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mb-metadata": JSON.stringify(mbMetadata),
      },
    });

    if (!response.ok) {
      console.error("Error fetching user data:", response.statusText);
      return;
    }
    const data = await response.json();
    if (data.error) {
      console.error("Error fetching user data:", data.error);
      return;
    }
    // Process the data as needed
    console.log("Fetched transactions:", data.txns);
    const parsedTxns = parseBitcoinTransaction(
      data.txns as Transaction[],
      data.btcAddress
    );
    console.log("Parsed transactions:", parsedTxns);
    setParsedTxns(parsedTxns);
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-black border border-emerald-900/50 text-white tabs-list">
          <TabsTrigger value="all" className=" data-[state=active]:text-black">
            All Transactions
          </TabsTrigger>
          <TabsTrigger value="sent" className=" data-[state=active]:text-black">
            Sent
          </TabsTrigger>
          <TabsTrigger
            value="received"
            className=" data-[state=active]:text-black"
          >
            Received
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>
                Complete history of your Bitcoin transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-emerald-900/20 animate-pulse rounded-md"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-emerald-900/30">
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          Transaction Hash
                        </th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          From
                        </th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          To
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">
                          Amount
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {parsedTxns.length === 0 ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="text-center py-4 text-white"
                          >
                            No transactions found.
                          </td>
                        </tr>
                      ) : (
                        parsedTxns.map((tx) => (
                          <tr
                            key={tx.hash}
                            className="border-b border-emerald-900/20 hover:bg-emerald-900/10"
                          >
                            <td className="py-3 px-2">
                              <div className="flex items-center">
                                <a
                                  href={`https://mempool.space/tx/${tx.hash}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-xs text-emerald-400 hover:underline"
                                >
                                  {formatHash(tx.hash)}
                                </a>
                              </div>
                            </td>
                            <td className="py-3 px-2">
                              <span className="font-mono text-xs text-gray-300">
                                {formatAddress(tx.from)}
                              </span>
                            </td>
                            <td className="py-3 px-2">
                              <span className="font-mono text-xs text-gray-300">
                                {formatAddress(tx.to)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span
                                className={`font-medium ${
                                  tx.type === "received"
                                    ? "text-emerald-500"
                                    : "text-gray-300"
                                }`}
                              >
                                {tx.type === "received" ? "+" : "-"}$
                                {(tx.amount * btcPrice).toFixed(2)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span className="text-xs text-gray-400">
                                ${(tx.fee * btcPrice).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="mt-4">
          <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Sent Transactions</CardTitle>
              <CardDescription>History of Bitcoin you've sent</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-emerald-900/20 animate-pulse rounded-md"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-emerald-900/30">
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          Transaction Hash
                        </th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          Sent To
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">
                          Amount
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sentTransactions.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="text-center py-4 text-white"
                          >
                            No sent transactions found.
                          </td>
                        </tr>
                      ) : (
                        sentTransactions.map((tx) => (
                          <tr
                            key={tx.hash}
                            className="border-b border-emerald-900/20 hover:bg-emerald-900/10"
                          >
                            <td className="py-3 px-2">
                              <div className="flex items-center">
                                <a
                                  href={`https://mempool.space/tx/${tx.hash}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-xs text-emerald-400 hover:underline"
                                >
                                  {formatHash(tx.hash)}
                                </a>
                              </div>
                            </td>
                            <td className="py-3 px-2">
                              <span className="font-mono text-xs text-gray-300">
                                {formatAddress(tx.from)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span className="font-medium text-red-400">
                                -${(tx.amount * btcPrice).toFixed(2)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span className="text-xs text-gray-400">
                                ${(tx.fee * btcPrice).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="received" className="mt-4">
          <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Received Transactions</CardTitle>
              <CardDescription>
                History of Bitcoin you've received
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-emerald-900/20 animate-pulse rounded-md"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-emerald-900/30">
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          Transaction Hash
                        </th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">
                          Received From
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">
                          Amount
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {receivedTransactions.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="text-center py-4 text-white"
                          >
                            No received transactions found.
                          </td>
                        </tr>
                      ) : (
                        receivedTransactions.map((tx) => (
                          <tr
                            key={tx.hash}
                            className="border-b border-emerald-900/20 hover:bg-emerald-900/10"
                          >
                            <td className="py-3 px-2">
                              <div className="flex items-center">
                                <a
                                  href={`https://mempool.space/tx/${tx.hash}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-xs text-emerald-400 hover:underline"
                                >
                                  {formatHash(tx.hash)}
                                </a>
                              </div>
                            </td>
                            <td className="py-3 px-2">
                              <span className="font-mono text-xs text-gray-300">
                                {formatAddress(tx.from)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span className="font-medium text-emerald-500">
                                +${(tx.amount * btcPrice).toFixed(2)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span className="text-xs text-gray-400">
                                ${(tx.fee * btcPrice).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransactionHistory;
