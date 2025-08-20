## Overview

AlphaDevs is building the Bitcoin Agent, an AI agent designed to interact directly with
Bitcoin L1 using a NEAR account. The system enables generation, signing, and secure
sending of Bitcoin transactions, with planned cross-chain settlement capabilities and deep
integration into the NEAR Protocol ecosystem.
Version 1.0 has already been successfully deployed on Bitcoin mainnet, allowing the agent
to generate and send transactions securely. We are now participating in the NEAR Protocol
Rewards Cohort 2, focusing on expanding the agent’s functionality to include trading
capabilities powered by NEAR Intents.
The roadmap balances ongoing feature development with a strategic GTM plan aimed at
scaling adoption across multiple blockchain networks.

## Goals

1. Expand What the Agent Can Do : Go beyond simply sending transactions and
   add the ability to trade directly on-chain using NEAR Intents.
2. Get Ready for Multiple Networks : Build toward full support for operating across
   different blockchains through MCP (Multi-Chain Protocol) integration.
3. Run Smooth and Secure : Keep the system fast, reliable, and safe, with strong
   uptime, security, and compliance in every tool we deploy.
4. Deepen Ecosystem Presence : Strengthen the Bitcoin Agent’s position within the
   NEAR ecosystem by fostering developer collaboration, encouraging user adoption,
   and driving meaningful on-chain activity.
5. Prepare to Scale : Create a solid go-to-market plan and secure the backing
   needed to reach a wider audience.

## Specifications

- **_Core Transaction Tools:_**
  Maintain and improve the Bitcoin L1 transaction suite (get-user, get-btc-balance,
  create-btc-mpc-txns, send-btc-txn) to ensure reliable generation, signing, and
  broadcasting of transactions.

- **_Security by Design:_**
  All signing processes must use Chain Signatures with no private key exposure, supported
  by regular independent security reviews.

- **_Performance Standards:_**
  Mainnet operations must meet 99.9% uptime and achieve target confirmation times for all
  transactions.

- **_Trading Capability:_**
  Integrate agent-driven trading features with configurable strategies, powered by NEAR
  Intents.

- **_Cross-Chain Interoperability:_**
  Implement MCP to enable seamless settlement on multiple supported blockchains.

- **_Scalability & Extensibility:_**
  Design architecture so new networks, features, and integrations can be added quickly
  without major rework.

## Milestones

### I. Bitcoin L1 Transaction Infrastructure (Achieved)

Objective: Deliver the foundational tools required for generating, signing, and sending
Bitcoin transactions directly on Layer 1.

Deliverables:

- `generate-btc-txn`: Utility to create valid raw Bitcoin transactions.
- `sign-btc-txn`: Multi-party signing using Chain Signatures.
- `send-btc-txn`: Reliable mainnet broadcasting with transaction tracking.

**_Status: Fully deployed and operational on Bitcoin mainnet with stable performance._**

### II. Mainnet Deployment – Version 1.0 (Achieved)

Objective: Move the Bitcoin Agent from testnet to Bitcoin mainnet with full operational
readiness.

Deliverables:

- Mainnet deployment of the Bitcoin Agent.
- Validation of performance and stability in live conditions.

**_Status: Achieved. The agent can securely generate and send transactions on Bitcoin
mainnet._**

### III. Feature Expansion via NEAR Protocol Cohort 2 (In Progress)

Objective: Evolve the Bitcoin Agent from a transaction-sending tool into a fully capable
trading agent using NEAR Intents.

Deliverables:

- Trading execution module integrated with NEAR Intents.
- Configurable strategies for automated on-chain trading.
- Live ecosystem testing and optimization.

**_Status: Transaction sending fully functional; trading feature under active development._**

### IV. Multi-Network and Cross-Chain Settlement (Planned)

Objective: Enable the Bitcoin Agent to operate across multiple blockchain networks with
settlement options via MCP.

Deliverables:

- Cross-chain compatibility layer supporting at least three additional networks.
- Settlement logic adaptable to different consensus mechanisms.

**_Planned Outcome: Broaden adoption by allowing the agent to interact with diverse
ecosystems beyond Bitcoin and NEAR._**

### V. Go-To-Market and Growth Strategy (Planned)

Objective: Position the Bitcoin Agent for broader adoption through structured market
planning, fundraising, and strategic partnerships.

Deliverables:

- Comprehensive go-to-market strategy, including target markets, pricing, and
  adoption channels.
- Investor materials and fundraising plan.
- Long-term product and feature expansion roadmap.

**_Planned Outcome: Secure resources for scaling and achieve early traction in priority markets._**
