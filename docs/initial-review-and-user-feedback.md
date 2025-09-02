# Initial Review & User Feedback

**Date:** Sept 2, 2025  
**Scope:** Early usage feedback collected from team members, other builders. Includes insights from direct testing as well as GDPR-compliant chat logs from the Bitte platform.

---

## 1. Sources of Feedback

- **Internal team usage**: AlphaDevs team members testing Bitcoin Agent flows.
- **External builders**: Developers in the ecosystem who trialed early functionality.
- **Chat logs (GDPR-compliant)**: User conversations and behaviors during testing sessions, anonymized for analysis.

---

## 2. Key Observations

### a) Strengths Highlighted

- **Seamless BTC transactions:** Users appreciated being able to send BTC from NEAR without bridges or wrapped tokens.
- **Swap integration:** The 1Click swap via NEAR Intents was described as simple and intuitive.
- **Developer focus:** The `/api/ai-plugin` endpoint was noted as easy to explore for integration.

### b) Challenges & Pain Points (Detailed)

1. **Wallet context detection**

   - _Current issue:_ When the wallet is not connected, the agent currently throws a generic error like _“I'm currently unable to retrieve your BTC balance due to a technical issue. Please try again later.”_.
   - _User feedback:_ Testers found this confusing and not actionable.
   - _Improvement needed:_ The agent should explicitly warn the user with a clear message such as _“No wallet connected. Please connect your NEAR wallet to proceed.”_

2. **Widget trigger visibility**

   - _Current issue:_ The widget trigger sometimes blends into the dashboard background, making it hard to notice.
   - _User feedback:_ Users missed the trigger entirely or struggled to locate it.
   - _Improvement needed:_ Update the trigger styling with a contrasting background, hover effects, or subtle animation to ensure visibility.

3. **Hydration errors in dashboard + widget**

   - _Current issue:_ Developers observed Next.js hydration warnings and mismatches when loading the dashboard and widget.
   - _User feedback:_ This raised concerns about stability and potential rendering issues on different devices.
   - _Improvement needed:_ Refactor affected components to use proper client-side guards (`useEffect`, dynamic imports) and eliminate hydration mismatches.

4. **Onboarding to NEAR Intents**

   - _Current issue:_ New users unfamiliar with NEAR Intents had difficulty understanding how intent-based execution works.
   - _User feedback:_ Some users expected traditional transaction signing flows and were confused by the “1Click” intent experience.
   - _Improvement needed:_ Add guided tooltips, onboarding docs, and simple examples (e.g., _“This intent will create and broadcast a BTC transaction from your NEAR account”_).

5. **Limited documentation depth**

   - _Current issue:_ Current docs are high-level and don’t provide end-to-end walkthroughs.
   - _User feedback:_ Developers requested more detailed guides, code snippets, and example integrations.
   - _Improvement needed:_ Expand documentation with sample flows (send BTC, swap BTC, AI agent call), troubleshooting, and SDK examples.

---
