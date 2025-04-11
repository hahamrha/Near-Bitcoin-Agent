## Bitcoin Bitte Agent

An AI agent that uses NEAR chain signatures to interact with Bitcoin L1 | Powered by Bitte.ai

## 📖 Table of Contents

- [Overview](#overview)
- [Agent Links](#agent-links)
- [Features](#features)
- [High Level Architecture](#high-level-architecture)
- [Setup Instructions](#setup-instructions)
- [License](#license)
- [Contributing](#contributing)

## Overview

The Bitcoin Bitte Agent was initially developed during the One Trillion Agents Hackathon to enable Bitcoin testnet transactions using NEAR accounts. It allowed users to retrieve their NEAR account, corresponding BTC Testnet address, and balance, and seamlessly create and send Bitcoin transactions.

We are now evolving the agent to support Bitcoin Mainnet, enabling secure creation and broadcast of BTC L1 transactions through NEAR account.

## Agent Links

- [Deployment](https://bitcoin-bitte-agent.vercel.app/)

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
