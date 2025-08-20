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
