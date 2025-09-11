# Bitcoin Agent — Technology Stack

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
