"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bitcoin, Bot, Wallet, Twitter, Github, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link"

export default function Home() {
  const [activeRoadmapItem, setActiveRoadmapItem] = useState(0)

  // Auto-rotate through roadmap items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoadmapItem((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" bg-white">
      <section className=" px-4 pt-16 pb-24 md:pt-24 md:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Bitcoin <span className="text-emerald-600">Agent</span>
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            An AI agent that uses NEAR chain signatures to interact with Bitcoin
            L1.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-xl font-bold"
            >
              Launch Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-100 bg-emerald-100">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-3 px-8">
          <Card className="border-gray-100">
            <CardContent className="pt-6">
              <div className="rounded-full bg-emerald-50 w-12 h-12 flex items-center justify-center mb-6">
                <Wallet className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">NEAR Integration</h3>
              <p className="text-gray-600">
                Create and sign Bitcoin transactions using one NEAR account.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-100">
            <CardContent className="pt-6">
              <div className="rounded-full bg-emerald-50 w-12 h-12 flex items-center justify-center mb-6">
                <Bitcoin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Create BTC Transaction</h3>
              <p className="text-gray-600">
                Generate BTC transaction with this agent and send it to Bitcoin
                mainnet.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-100">
            <CardContent className="pt-6">
              <div className="rounded-full bg-emerald-50 w-12 h-12 flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bitte AI Agent</h3>
              <p className="text-gray-600">
                An AI agent running on NEAR mainnet powered by Bitte.ai runtime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 border-t border-emerald-900/50 bg-gradient-to-b from-black to-emerald-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Roadmap</h2>
          <p className="text-emerald-400 text-center mb-12 max-w-2xl mx-auto">
            Our vision for the future of Bitcoin Agent
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-700/50 transform md:-translate-x-1/2"></div>

            {/* Current State */}
            <div className="mb-16 relative">
              <h3 className="text-2xl font-bold text-center text-emerald-500 mb-8">Current State</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="md:text-right flex flex-col items-start md:items-end order-2 md:order-1">
                  <div className="bg-black/60 border border-emerald-900/50 p-6 rounded-lg mb-4 w-full">
                    <h4 className="text-xl font-bold mb-2 flex items-center md:justify-end gap-2">
                      <span>Generate BTC L1 Transactions</span>
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    </h4>
                    <p className="text-gray-400">Tool: generate-btc-txn</p>
                  </div>
                </div>

                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 md:left-auto md:right-full top-6 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center transform md:-translate-x-1/2 z-10">
                    <CheckCircle2 className="h-5 w-5 text-black" />
                  </div>
                </div>

                <div className="relative order-3">
                  <div className="absolute left-0 md:left-full top-6 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center transform md:-translate-x-1/2 z-10">
                    <CheckCircle2 className="h-5 w-5 text-black" />
                  </div>
                </div>

                <div className="order-4">
                  <div className="bg-black/60 border border-emerald-900/50 p-6 rounded-lg mb-4">
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span>Sign & Relay to Mainnet</span>
                    </h4>
                    <p className="text-gray-400">Tools: sign-btc-txn & send-btc-txn</p>
                  </div>
                </div>

                <div className="md:text-right flex flex-col items-start md:items-end order-6 md:order-5">
                  <div className="bg-black/60 border border-emerald-900/50 p-6 rounded-lg mb-4 w-full">
                    <h4 className="text-xl font-bold mb-2 flex items-center md:justify-end gap-2">
                      <span>Move Agent to BTC Mainnet</span>
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    </h4>
                    <p className="text-gray-400">In progress</p>
                  </div>
                </div>

                <div className="relative order-5 md:order-6">
                  <div className="absolute left-0 md:left-auto md:right-full top-6 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center transform md:-translate-x-1/2 z-10">
                    <Clock className="h-5 w-5 text-black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-center text-emerald-500 mb-8">Future Vision</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    phase: "Phase 1",
                    title: "Custom BTC Transactions",
                    description: "Add support for custom BTC transactions and develop more tools for the agent.",
                    isActive: activeRoadmapItem === 0,
                  },
                  {
                    phase: "Phase 2",
                    title: "Bitcoin DeFi Integration",
                    description: "Develop tools to support Bitcoin DeFi with agent and integrate Bitcoin lending.",
                    isActive: activeRoadmapItem === 1,
                  },
                  {
                    phase: "Phase 3",
                    title: "Complete Bitcoin Operations",
                    description:
                      "Bitcoin agent to handle all operations on BTC by leveraging NEAR AI and chain signatures.",
                    isActive: activeRoadmapItem === 2,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-black/60 border rounded-lg p-6 transition-all duration-500 ${item.isActive
                      ? "border-emerald-500 transform scale-105 shadow-lg shadow-emerald-900/30"
                      : "border-emerald-900/50"
                      }`}
                  >
                    <Badge
                      className={`mb-4 ${item.isActive ? "bg-emerald-500 text-black" : "bg-emerald-900/50 text-emerald-400"}`}
                    >
                      {item.phase}
                    </Badge>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 border-t border-emerald-900/50 bg-black">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the future of Bitcoin Agents and unlock the full potential of
            the NEAR blockchain.
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Launch Agent
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Social Links */}
      <section className="px-4 py-10 border-t border-emerald-900/50 bg-black">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <Link
              href="https://x.com/btc_near"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </Link>
            <Link
              href="https://github.com/0xAlphaDevs/Near-Bitcoin-Agent/blob/main/README.md"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-900/50 py-6 bg-black">
        <div className="px-4 text-center text-white">
          <a href="https://www.alphadevs.dev/" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            <p> © Team AlphaDevs</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
