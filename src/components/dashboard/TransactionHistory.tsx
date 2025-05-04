"use client";
import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allTransactions } from "@/lib/sampleData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NearContext } from "@/context/context";

const TransactionHistory = () => {
  const [isLoading, setIsLoading] = useState(true);

  // NEAR Context
  const { wallet, signedAccountId } = useContext(NearContext);

  // Filter transactions for sent and received tabs
  const sentTransactions = allTransactions.filter((tx) => tx.type === "sent");
  const receivedTransactions = allTransactions.filter(
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
    console.log("signedAccountId", signedAccountId);

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
    console.log("data", data);
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
                      {allTransactions.map((tx) => (
                        <tr
                          key={tx.hash}
                          className="border-b border-emerald-900/20 hover:bg-emerald-900/10"
                        >
                          <td className="py-3 px-2">
                            <div className="flex items-center">
                              <span className="font-mono text-xs text-emerald-400">
                                {formatHash(tx.hash)}
                              </span>
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
                              {tx.type === "received" ? "+" : "-"}
                              {tx.amount} BTC
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="text-xs text-gray-400">
                              {tx.fee} BTC
                            </span>
                          </td>
                        </tr>
                      ))}
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
                      {sentTransactions.map((tx) => (
                        <tr
                          key={tx.hash}
                          className="border-b border-emerald-900/20 hover:bg-emerald-900/10"
                        >
                          <td className="py-3 px-2">
                            <div className="flex items-center">
                              <span className="font-mono text-xs text-emerald-400">
                                {formatHash(tx.hash)}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <span className="font-mono text-xs text-gray-300">
                              {formatAddress(tx.to)}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="font-medium text-gray-300">
                              -{tx.amount} BTC
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="text-xs text-gray-400">
                              {tx.fee} BTC
                            </span>
                          </td>
                        </tr>
                      ))}
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
                      {receivedTransactions.map((tx) => (
                        <tr
                          key={tx.hash}
                          className="border-b border-emerald-900/20 hover:bg-emerald-900/10"
                        >
                          <td className="py-3 px-2">
                            <div className="flex items-center">
                              <span className="font-mono text-xs text-emerald-400">
                                {formatHash(tx.hash)}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <span className="font-mono text-xs text-gray-300">
                              {formatAddress(tx.from)}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="font-medium text-emerald-500">
                              +{tx.amount} BTC
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <span className="text-xs text-gray-400">
                              {tx.fee} BTC
                            </span>
                          </td>
                        </tr>
                      ))}
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
