"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Bitcoin,
  Copy,
  ExternalLink,
  RefreshCw,
  Wallet,
  CheckIcon,
  Bot,
  Github,
} from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NearContext } from "@/context/context";
import { connect, utils } from "near-api-js";

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [nearBalance, setNearBalance] = useState(0);
  const [btcBalance, setBtcBalance] = useState(0);
  const [btcAddress, setBtcAddress] = useState("...");
  const [bitcoinPrice, setBitcoinPrice] = useState(0);

  const { wallet, signedAccountId } = useContext(NearContext);

  const signIn = () => {
    //@ts-ignore
    wallet.signIn();
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
    await getUser(signedAccountId);
    await getNearAccountBalance();
    await getBitcoinPrice();
    setIsLoading(false);
  }

  async function getUser(signedAccountId: string) {
    console.log("signedAccountId", signedAccountId);

    // make api call to /api/tools/get-user
    const mbMetadata = {
      accountId: signedAccountId, // Replace with actual value
    };

    const response = await fetch("/api/tools/get-btc-balance", {
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
    setBtcAddress(data.btcAddress);
    setBtcBalance(data.btcBalance);
  }

  async function getNearAccountBalance() {
    const connectionConfig = {
      networkId: "mainnet",
      nodeUrl: "https://rpc.mainnet.near.org",
    };
    const nearConnection = await connect(connectionConfig);
    // gets account balance
    const account = await nearConnection.account(signedAccountId);
    const response = await account.getAccountBalance();
    const balance = utils.format.formatNearAmount(response.total, 5);
    setNearBalance(parseFloat(balance));
  }

  async function getBitcoinPrice() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    const data = await response.json();
    setBitcoinPrice(data.bitcoin.usd);
    // console.log("Bitcoin Price:", data.bitcoin.usd);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="border-b border-emerald-900/50 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-0 text-xl font-bold"
            >
              <Bitcoin className="h-6 w-6 text-emerald-500" />
              <span>
                Bitcoin <span className="text-emerald-500">Agent</span>
              </span>
            </Link>
          </div>

          {signedAccountId && (
            <div className="flex items-center gap-4">
              <p className="text-md font-bold text-gray-400">
                {nearBalance.toFixed(3)} <span>NEAR</span>{" "}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-red-900 hover:border-red-500 text-red-500 hover:text-red-500"
                onClick={() => {
                  // @ts-ignore
                  wallet.signOut();
                }}
              >
                Disconnect
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400 mb-8">
          Manage your Bitcoin wallet and transactions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wallet Info Card */}
          {signedAccountId ? (
            <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-emerald-500" />
                  Bitcoin Wallet
                </CardTitle>
                <CardDescription>
                  Your Bitcoin wallet generated via NEAR chain signatures
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Wallet Address */}
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Wallet Address</div>
                  {isLoading ? (
                    <div className="h-10 bg-emerald-900/20 animate-pulse rounded-md"></div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-900/20 text-white p-3 rounded-md flex-1 font-mono text-sm break-all">
                        {btcAddress}
                      </div>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-emerald-900/50 hover:border-emerald-500 hover:text-emerald-500"
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <CheckIcon className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  )}
                  <div className="text-xs text-gray-500">
                    This address is uniquely generated for your account using
                    NEAR chain signatures
                  </div>
                </div>

                {/* Wallet Balance */}
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Wallet Balance</div>
                  {isLoading ? (
                    <div className="h-16 bg-emerald-900/20 animate-pulse rounded-md"></div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-900/20 p-4 rounded-md">
                        <Bitcoin className="h-8 w-8 text-emerald-500" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {btcBalance} BTC
                        </div>
                        <div className="text-sm text-gray-400">
                          ≈ ${(btcBalance * bitcoinPrice).toLocaleString()} USD
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="outline"
                        className="ml-auto border-emerald-900/50 hover:border-emerald-500 hover:text-emerald-500"
                        onClick={async () => {
                          setIsLoading(true);
                          await getUser(signedAccountId);
                          await getNearAccountBalance();
                          setIsLoading(false);
                        }}
                      >
                        <RefreshCw
                          className={
                            isLoading ? "animate-spin h-4 w-4" : "h-4 w-4"
                          }
                        />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between border-t border-emerald-900/30 pt-4">
                <Button
                  variant="outline"
                  className="border-emerald-900/50 hover:border-emerald-500 hover:text-emerald-500"
                  onClick={() =>
                    window.open(
                      `https://mempool.space/address/${btcAddress}`,
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on Explorer
                </Button>
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 group relative overflow-hidden"
                  onClick={() =>
                    window.open(`https://app.near-intents.org/`, "_blank")
                  }
                >
                  Fund Wallet
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm col-span-1 lg:col-span-2 justify-center items-center">
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 group relative overflow-hidden "
                onClick={signIn}
              >
                Connect NEAR Account
              </Button>
            </Card>
          )}

          {/* Agent Info Card */}
          <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-emerald-500" />
                Agent Status
              </CardTitle>
              <CardDescription>
                Bitcoin Agent information and status
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm">Agent is active</span>
              </div>

              <div className="text-sm text-gray-400">
                <p className="mb-2">
                  Your Bitcoin Agent is currently running and connected to the
                  Bitcoin network.
                </p>
                <p>
                  The agent uses NEAR chain signatures to securely manage your
                  Bitcoin transactions without requiring you to manage private
                  keys directly.
                </p>
              </div>

              <div className="bg-emerald-900/20 p-3 rounded-md mt-4">
                <h4 className="text-sm font-medium mb-1">Connected Networks</h4>
                <div className="flex gap-2">
                  <Badge className="bg-emerald-900/50 text-emerald-400">
                    Bitcoin Mainnet
                  </Badge>
                  <Badge className="bg-emerald-900/50 text-emerald-400">
                    NEAR Mainnet
                  </Badge>
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-emerald-900/30 pt-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://bitte.ai/agents/bitcoin-agent.xyz",
                    "_blank"
                  )
                }
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Launch Agent Interface
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Transaction History */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-black border border-emerald-900/50 text-white tabs-list">
              <TabsTrigger
                value="all"
                className=" data-[state=active]:text-black"
              >
                All Transactions
              </TabsTrigger>
              <TabsTrigger
                value="sent"
                className=" data-[state=active]:text-black"
              >
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
                <CardContent className="pt-6">
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
                    <div className="text-center py-8 text-gray-400">
                      <p>No transactions found</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sent" className="mt-4">
              <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-center py-8 text-gray-400">
                    <p>No sent transactions</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="received" className="mt-4">
              <Card className="border-emerald-900/50 bg-black/60 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-center py-8 text-gray-400">
                    <p>No received transactions</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-900/50 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Bitcoin <span className="text-emerald-500">Agent</span>
              </h3>
              <a
                href="https://www.alphadevs.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 text-sm"
              >
                © Team AlphaDevs
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://x.com/btc_near"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  <Image src="/x.png" alt="X" width={26} height={26} />
                </Link>
                <Link
                  href="https://github.com/0xAlphaDevs/Near-Bitcoin-Agent"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  <Github className="h-5 w-5 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
