"use client";

import { BitteWidgetChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/styles.css";

export default function WidgetIframePage() {
  return (
    <div style={{ background: "transparent" }}>
      <BitteWidgetChat
        agentId="bitcoin-agent.xyz"
        apiUrl="/api/chat"
        wallet={{}}
      />
    </div>
  );
}
