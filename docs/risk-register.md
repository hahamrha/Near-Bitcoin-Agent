# Risk Register

This document highlights the key risks for the Bitcoin Agent and how we plan to manage them.

---

## Key Risks

| Risk ID | Description                                                                                      | Likelihood | Impact | Mitigation                                                                                                                   | Status     |
| ------- | ------------------------------------------------------------------------------------------------ | ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------- |
| R-001   | Security vulnerabilities in agent logic and secure execution(loss of funds, exploits)            | High       | High   | Continuous montoring and secure deployment practices. Finally move from vercel deployment to phala TEEs for secure execution | Mitigated  |
| R-002   | Dependency on external data sources for prices and other data may provide incorrect/missing data | Medium     | High   | Use multiple sources, validation checks, monitoring                                                                          | Monitoring |
| R-003   | Private key or wallet compromise (unauthorized access to funds)                                  | High       | High   | Near Chain Signatures uses MPC service for secure signing                                                                    | Resolved   |
| R-004   | Bugs in intents tool agent logic causing unintended trades or loops                              | Medium     | High   | Thorough testing, simulations and safe thresholds                                                                            | Monitoring |

---

## Risk Rating Guide

- **Likelihood:**

  - Low = unlikely to occur
  - Medium = possible
  - High = likely to occur

- **Impact:**

  - Low = minor effect on cost/timeline/quality
  - Medium = noticeable effect but manageable
  - High = major delay, cost overrun, or failure risk

- **Risk Rating (LxI):** Combine likelihood × impact (e.g., High × High = 5, Medium × High = 4).

---
