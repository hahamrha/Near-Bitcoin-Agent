## Bitcoin Agent

An AI agent that uses NEAR chain signatures to interact with Bitcoin L1 | Powered by Bitte.ai

![Banner Image](./public/assets/banner.png)

## 📖 Table of Contents

- [Overview](#overview)
- [Agent Links](#agent-links)
- [Features](#features)
- [High Level Architecture](#high-level-architecture)
- [Setup Instructions](#setup-instructions)
- [License](#license)
- [Contributing](#contributing)

## Overview

### Origin Story

The Bitcoin Bitte Agent was initially developed during the One Trillion Agents Hackathon to enable Bitcoin testnet transactions using NEAR accounts. It allowed users to retrieve their NEAR account, corresponding BTC Testnet address, and balance, and seamlessly create and send Bitcoin transactions.

### What is Bitcoin Agent?

"Bitcoin Agent", an agent that uses NEAR chain signatures to interact with Bitcoin L1.
Now, you can send transactions on the Bitcoin mainnet using just your NEAR account. The agent’s tools are highly composable and can be integrated with other agents to create MPC transactions and broadcast them on the Bitcoin mainnet.

### What's possible with Bitcoin Agent?

➡️ The agent runs in the Bitte runtime, powered by NEAR chain signatures. When you sign and send transactions on the Bitcoin mainnet, there are no bridges and no wrapped tokens involved—the transaction is settled directly on Bitcoin L1.

➡️ You can access the Bitcoin Agent dashboard [here](http://bitcoin-agent.xyz/dashboard) to get your Bitcoin address associated with your NEAR account. The dashboard also displays your agent status, wallet balances, and past transactions.

## Agent Links

- [Website](https://bitcoin-agent.xyz)
- [Agent Deployment](https://bitte.ai/agents/bitcoin-agent.xyz)

## Features

- Leverages NEAR MPC signatures for Bitcoin actions.

- This agent is built using bitte-ai/agent-sdk to standardize agent behavior and communication. Implemented tools are as follows:

  - `get-user` : Get NEAR wallet context

  - `get-btc-balance` : Fetch user’s BTC balance

  - `create-btc-mpc-transaction` : Generate a transaction using MPC signing

  - `send-btc-txn` : Broadcast a signed transaction

- Each tool is registered in the AI plugin manifest at : `/api/ai-plugin`

## High Level Architecture

![Architecture Diagram](./public/assets/architecture.png)

## Setup Instructions

1. Clone the repository `https://github.com/0xAlphaDevs/Near-Bitcoin-Agent.git`.
2. Install the required dependencies using `pnpm install`.
3. Copy `.env.example` to `.env` and fill in the required variables.
4. Run using `pnpm dev` .

## License

This project is licensed under the [MIT License](./LICENSE).

## 🤝 Contributing

We welcome community contributions! Please check the [CONTRIBUTING.md](./CONTRIBUTING.md) for more information on how to get involved.
