# 🪙 Bitcoin Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/0xAlphaDevs/Near-Bitcoin-Agent?style=social)](https://github.com/0xAlphaDevs/Near-Bitcoin-Agent)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> 🚀 An AI agent that uses NEAR chain signatures to interact with Bitcoin L1 | Powered by Bitte.ai

![Banner Image](./public/assets/banner.png)

## 📖 Table of Contents

- [🏆 Project History](#project-history)
- [✨ Features](#features)
- [🏗️ Architecture](#architecture)
- [🚀 Quick Start](#quick-start)
- [🔧 Setup](#setup)
- [📊 Usage](#usage)
- [🛠️ Agent Tools](#agent-tools)
- [📚 Docs](#docs)
- [🌐 Links](#links)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## Project History

The Bitcoin Bitte Agent was initially developed during the One Trillion Agents Hackathon to enable Bitcoin testnet transactions using NEAR accounts. It allowed users to retrieve their NEAR account, corresponding BTC Testnet address, and balance, and seamlessly create and send Bitcoin transactions.

In v2.0, we are adding trading capabilities in this agent that will allow users to buy, sell and swap any assets on any chain to BTC and vice versa.

### What is Bitcoin Agent?

"Bitcoin Agent", an agent that uses NEAR chain signatures to interact with Bitcoin L1.
Now, you can send transactions on the Bitcoin mainnet using just your NEAR account. The agent’s tools are highly composable and can be integrated with other agents to create MPC transactions and broadcast them on the Bitcoin mainnet.

## Features

### 🔐 MPC Bitcoin Wallet

- Native Bitcoin L1 transactions using NEAR accounts
- No bridges or wrapped tokens required
- Powered by NEAR chain signatures and MPC technology
- Direct settlement on Bitcoin mainnet

### 📊 Agent Dashboard

- View your Bitcoin address linked to your NEAR account
- Check wallet balances and transaction history
- Monitor agent status in real-time
- Access at [bitcoin-agent.xyz/dashboard](https://bitcoin-agent.xyz/dashboard)
- Access on [NEAR registry](https://app.near.ai/agents/nanotech-dredd.near/bitcoin-agent/latest)

### ⚡ Instant Cross-Chain Swaps

- Swap any supported asset to BTC using NEAR Intents
- Chain-abstracted liquidity access
- Seamless deposit, swap, and withdrawal flow
- Support for multiple blockchain assets

## Architecture

![Architecture Diagram](./public/assets/architecture.png)

The Bitcoin Agent leverages NEAR's chain signatures technology to enable Bitcoin transactions through MPC (Multi-Party Computation). The system integrates with NEAR Intents for cross-chain liquidity and the Bitte.ai runtime for AI agent functionality.

## Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- A NEAR account
- Basic understanding of Bitcoin and blockchain concepts

### Installation

```bash
# Clone the repository
git clone https://github.com/0xAlphaDevs/Near-Bitcoin-Agent.git
cd Near-Bitcoin-Agent

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Fill in your environment variables

# Start development server
pnpm dev
```

Visit `http://localhost:3001` to access the agent interface.

## Setup

### 1. Bitte Agent

### Environment Variables

Create a `.env` file with the following variables:

```env
ACCOUNT_ID=your-near-account.near
BITTE_API_KEY=
# Add other required environment variables as specified in .env.example
```

### Development Commands

```bash
# Development mode
pnpm dev

# Build for production
pnpm build

# Deploy agent
pnpm build:deploy
```

### 2. NEAR AI Agent

Basic Embedding : To embed an agent, use the following iframe code replacing the src with the agent you want to embed.

```bash
<iframe
  src="https://app.near.ai/agents/nanotech-dredd.near/bitcoin-agent/latest"
  sandbox="allow-scripts allow-popups allow-same-origin allow-forms"
  style="border: none; height: 100svh;">
</iframe>
```

## Usage

### Basic Workflow

1. **Connect your NEAR account** to the Bitcoin Agent
2. **View your Bitcoin address** generated through MPC
3. **Check your BTC balance**
4. **Create Bitcoin transactions** using your NEAR account
5. **Swap assets to BTC** from any asset supported on NEAR

### Example: Sending Bitcoin

```javascript
// The agent handles the complex MPC signing process
// You just need to specify the recipient and amount
{
  "btcReceiver": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  "btcAmountInSatoshi": "100000"
}
```

## Agent Tools

The Bitcoin Agent provides several powerful tools built using the [Bitte.ai Agent SDK](https://bitte.ai/):

| Tool                    | Description                  | Purpose                                    |
| ----------------------- | ---------------------------- | ------------------------------------------ |
| `get-user`              | Retrieve NEAR wallet context | Get user's NEAR account and BTC address    |
| `get-btc-balance`       | Fetch Bitcoin balance        | Check current BTC holdings                 |
| `create-btc-mpc-txn`    | Generate Bitcoin transaction | Create MPC-signed Bitcoin transactions     |
| `send-btc-txn`          | Broadcast transaction        | Send signed transaction to Bitcoin mainnet |
| `check-supported-token` | Verify asset support         | Check if asset can be swapped to BTC       |
| `intents`               | Execute cross-chain swap     | Swap assets to BTC via NEAR Intents        |

All tools are registered in the AI plugin manifest at `/api/ai-plugin`.

## Docs

The `/docs` folder contains detailed documentation to support the Bitcoin Agent project.
It includes:

- Lean Canvas & Competitive Analysis
- Technical Roadmap & Architecture
- Risk Register
- Tech Stack
- Initial Reviews & Feedback
- Progress Summaries

You can explore the full set of documents here: [📂 View Docs Folder](/docs)

## Links

- 🌍 **Website**: [bitcoin-agent.xyz](https://bitcoin-agent.xyz)
- 🤖 **Live Agent**: [bitte.ai/agents/bitcoin-agent.xyz](https://bitte.ai/agents/bitcoin-agent.xyz)
- 📊 **Dashboard**: [bitcoin-agent.xyz/dashboard](https://bitcoin-agent.xyz/dashboard)
- 📈 **Presentation**: [View Slides](https://www.canva.com/design/DAGvXIsf8WE/eizLJdV5VFsFRQtgGHHzXQ/view)
- 🗺️ **Roadmap**: [View Roadmap](https://www.canva.com/design/DAGvXIsf8WE/eizLJdV5VFsFRQtgGHHzXQ/view#10)

## Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Report bugs** by opening an issue
- 💡 **Suggest features** for future development
- 🔧 **Submit pull requests** with improvements
- 📖 **Improve documentation** and examples
- 🧪 **Add tests** to increase coverage

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and test thoroughly
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](code_of_conduct.md) before contributing.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

<div align="center">

**Built by [AlphaDevs Labs](https://github.com/0xAlphaDevs)**

[⭐ Star this repo](https://github.com/0xAlphaDevs/Near-Bitcoin-Agent) | [🐛 Report Bug](https://github.com/0xAlphaDevs/Near-Bitcoin-Agent/issues) | [💡 Request Feature](https://github.com/0xAlphaDevs/Near-Bitcoin-Agent/issues)

</div>
