# Value Flow Diagram : Bitcoin Agent

## Overview

This document illustrates how **value and actions flow** between users, liquidity providers, Bitcoin Agent, NEAR AI, and the underlying networks (**NEAR** and **Bitcoin L1**).  
It includes both a **high-level flowchart** and a **swimlane diagram** for clarity.

---

## Actors

- **End User (NEAR Account Holder):** Wants to send, trade, or swap real BTC without leaving NEAR.
- **Liquidity Provider (NEAR DeFi):** Provides assets on NEAR for BTC swaps via intents.
- **Bitcoin Agent (Execution Layer):** Middleware that signs BTC transactions with NEAR chain signatures and executes swaps via intents.
- **AI Agents (NEAR AI):** Invoke Bitcoin Agent to automate BTC actions.
- **Bitcoin L1 Network:** Settlement layer for BTC transactions.

---

## Flow Diagram (High-Level)

### High-Level Value Flow (System Overview)

```mermaid
flowchart TD
    subgraph UserSide[User Side]
        A[NEAR Account / Wallet]
        F[AI Agent via NEAR AI]
    end

    subgraph AgentLayer[Bitcoin Agent Layer]
        B[Bitcoin Agent Service]
        C[Chain Signatures / MPC Module]
        E[NEAR Intents API]
    end

    subgraph Networks[Underlying Networks]
        D[Bitcoin L1]
        G[NEAR DeFi / Liquidity Pools]
    end

    %% Flows
    A -->|Intent: Send BTC| E
    A -->|Intent: Buy/Sell/Swap BTC| E
    F -->|AI Invocation: trade/swap| B
    E --> B
    B -->|Signs Transaction| C
    C -->|Native BTC Transaction| D
    D -->|Settlement to BTC Address| Recipient[BTC Recipient]

    B -->|Execute Swap| G
    G -->|Provide Asset Exchange| A
```

---

### Detailed Transaction Flow (Sequence Diagram)

```mermaid
sequenceDiagram
    participant User as End User (NEAR Account)
    participant AI as AI Agent (NEAR AI)
    participant Agent as Bitcoin Agent
    participant MPC as Chain Signatures / MPC
    participant NEAR as NEAR Liquidity Pools
    participant BTC as Bitcoin L1

    User->>Agent: Submit Intent (send/trade/swap BTC)
    AI->>Agent: Invoke BTC action via NEAR AI
    Agent->>NEAR: Route swap/trade requests (if applicable)
    NEAR-->>Agent: Provide liquidity / swap result
    Agent->>MPC: Request BTC transaction signature
    MPC->>BTC: Broadcast signed BTC transaction
    BTC-->>User: Settlement on Bitcoin L1
    Agent-->>User: Return results (confirmation, assets, tx hash)
```

---
