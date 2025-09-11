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

## 2. MPC & Signature Infrastructure

- **MPC Signer (v1.signer)**

  - Secure multiparty computation (MPC) system for signing native Bitcoin transactions.
  - Ensures non-custodial, trust-minimized key management.

- **Chain Signatures**
  - NEAR primitive that enables users to control Bitcoin transactions with their NEAR accounts.
  - Used as the cryptographic bridge between NEAR and Bitcoin L1.

---
