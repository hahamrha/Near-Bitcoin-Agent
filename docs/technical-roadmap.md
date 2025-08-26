# Technical Roadmap – Bitcoin Agent

_(Q2 & Q3)_

---

## Q2 – Trading, Swaps & NEAR AI Integration 🚀

### Objective

Transform Bitcoin Agent into a **full-featured trading agent** capable of buy, sell, and swap operations with BTC on NEAR using **NEAR Intents**, and complete the integration with **NEAR AI infra** to allow composability with other AI agents.

### Milestones & Deliverables

1. **BTC Buy & Sell with NEAR Intents**

   - Extend current transaction support to enable **buying BTC with NEAR-native assets** and **selling BTC back into NEAR-native assets**.
   - Ensure execution is **trust-minimized**, with no bridges or wrapped tokens.
   - Deliverables:
     - Intent execution for BTC buy/sell.
     - Deployment in Bitte Playground and add Bitte chat widget in Agent dashboard for easy access to the agent.

2. **BTC ↔ NEAR Asset Swaps**

   - Introduce **swap functionality** allowing BTC to be exchanged into **any NEAR-supported asset** through intents.
   - Build liquidity routing so swaps automatically select the best available path on NEAR DEXs.
   - Deliverables:
     - Swap handler with unified API for BTC ↔ NEAR assets.
     - Routing logic for liquidity optimization.
     - Demo: BTC → USDC on NEAR, BTC → NEAR, BTC → wNEAR.

3. **Full NEAR AI Integration**

- Deploy Bitcoin Agent as a native **NEAR AI agent**, enabling seamless interoperability with other AI-driven agents in the ecosystem.
- Expose an AI-consumable interface so NEAR AI agents can request Bitcoin actions (transfers, buys, sells, swaps) that are executed via NEAR intents and chain signatures
- Deliverables:
  - NEAR AI–compatible agent service endpoint.
  - End-to-end demo where a NEAR AI trading agent triggers Bitcoin Agent to execute a BTC transaction or trade.

---

## Q3 – Axons : MCP Infrastructure & Multichain Wallets ⚡

### Objective

Evolve Bitcoin Agent into the **first participant of Axons** , a multi-network MCP infrastructure on NEAR, supporting **multi-chain wallets with unified liquidity** and **instant swaps**. Axons Network will serve as the **infrastructure backbone** that allows agents across chains to interoperate seamlessly.

### Milestones & Deliverables

1. **Axons MCP Servers for Agents on NEAR**

   - Build **Axons MCP servers** that standardize how agents operate on NEAR.
   - Each MCP server will handle requests, signature flows, and execution for its corresponding chain/agent.
   - Deliverables:
     - Axons MCP server template for agents (starting with Bitcoin Agent).
     - Interfaces for secure communication between Axons MCP servers and NEAR chain signatures.
     - Proof-of-concept Axons MCP deployment with Bitcoin Agent as first adopter.

2. **Multichain Wallets with Unified Liquidity**

   - Extend Bitcoin Agent into a **multi-chain wallet abstraction**, allowing users to manage BTC alongside NEAR-native assets.
   - Aggregate liquidity from multiple Axons MCP servers so users can access **unified liquidity pools** across chains.
   - Deliverables:
     - Unified wallet interface abstracting NEAR + BTC.
     - Cross-agent liquidity pooling mechanism.
     - Testnet flow: Swap BTC → USDC.near → ETH (simulated multichain trade).

3. **Instant Swaps Powered by NEAR Intents**
   - Enable **low-latency swaps across assets and chains** by combining unified liquidity + intents.
   - Optimize the flow so swaps feel near-instant, while still remaining fully on-chain and verifiable.
   - Deliverables:
     - Intent router for multi-chain swaps.
     - Integration with NEAR chain signatures for MPC wallet support.
     - Benchmarked demo of cross-chain instant swaps with settlement proofs.

---

✅ By the end of **Q2**, Bitcoin Agent will evolve into a **trade-ready, AI-integrated execution agent** for BTC on NEAR.  
✅ By the end of **Q3**, Bitcoin Agent will pioneer **Axons**, enabling multi-chain wallets, unified liquidity, and instant cross-chain swaps, establishing the foundation for a **network of multi-chain agents on NEAR**.
