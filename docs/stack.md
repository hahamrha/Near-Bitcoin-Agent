# Bitcoin Agent : Technology Stack

**Scope:** Core technology stack used to design, build, and run Bitcoin Agent. Complements the Technical Architecture document.

---

## 1. Blockchain Layer

- **Bitcoin L1**

  - Settlement layer for all BTC transactions.
  - Transactions are signed with MPC chain signatures and broadcast directly to the Bitcoin network.

- **NEAR Protocol**
  - Serves as the execution and intent layer.
  - Provides NEAR chain signatures, intents API, and liquidity infrastructure.
  - Accounts on NEAR act as the entry point for Bitcoin Agent usage.

---

## 2. MPC & Signature Infrastructure

- **MPC Signer (v1.signer)**

  - Secure multiparty computation (MPC) system for signing native Bitcoin transactions.
  - Ensures non-custodial, trust-minimized key management.

- **Chain Signatures**
  - NEAR primitive that enables users to control Bitcoin transactions with their NEAR accounts.
  - Used as the cryptographic bridge between NEAR and Bitcoin L1.

---

## 3. Execution & Agent Layer

- **Bitcoin Agent**

  - Core execution agent that handles user intents (send, trade, swap).
  - Routes liquidity requests through NEAR Intents and returns results with BTC settlement.

- **Bitte AI Agent Runtime**

  - Runtime environment for deploying Bitcoin Agent as an AI-compatible agent.
  - Enables other AI agents to query and invoke Bitcoin Agent using standard interfaces.

- **Axons Protocol (Planned)**
  - Multi-chain coordination and liquidity layer.
  - Extends Bitcoin Agent capabilities beyond NEAR to other ecosystems.
  - Provides unified liquidity and instant swaps across chains.

---

## 4. APIs & Integration

- **Bitte Agent SDK (`bitte-ai/agent-sdk`)**

  - Provides tools for defining, testing, and deploying agents.
  - Used to expose Bitcoin Agent functionality to developers and AI systems.

- **Plugin Manifest (`/api/ai-plugin`)**
  - Defines Bitcoin Agent capabilities in a machine-readable format.
  - Enables discovery and integration by other AI agents in NEAR AI infra.

---

## 5. Application Layer

- **Dashboard & Widget**

  - User interface for sending BTC, executing swaps, and interacting with the agent.
  - Integrated wallet context to connect NEAR accounts.

- **Developer Documentation**
  - Lean Canvas, Roadmap, Competitive Analysis, Technical Docs.
  - Serves as onboarding material for external contributors and ecosystem developers.

---

## 6. Infrastructure & Tooling

- **Languages & Frameworks:**

  - Rust → Smart contracts & NEAR integrations.
  - TypeScript/Next.js → Dashboard + widget frontend.
  - Node.js → API services and agent runtime glue code.

- **Infrastructure:**

  - NEAR Testnet/Mainnet for account-level execution.
  - Bitte Playground for testing agent deployments.
  - Cloud infra (containerized services) for running MPC nodes and APIs.

- **Security & Audits:**
  - MPC infrastructure hardened for key safety.
  - Planned third-party audits for smart contracts and agent infra.

---

## 7. Public Good Alignment

Bitcoin Agent is developed as **public infrastructure** for the NEAR x Bitcoin ecosystem.

- Open-source stack wherever possible.
- Composability-first design (intents, chain signatures, AI runtime).
- Future roadmap extends towards **Axons Protocol**, unifying multi-chain execution under the same stack principles.

---
