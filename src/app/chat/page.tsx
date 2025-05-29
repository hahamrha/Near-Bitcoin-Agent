"use client";

import { NearContext } from "@/context/context";
import { BitteWidgetChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/styles.css";
import { Wallet } from "@near-wallet-selector/core";
import { useContext } from "react";

export default function Chat() {
  const { signedInWallet } = useContext(NearContext);
  console.log("Chat component rendered with signedInWallet:", signedInWallet);

  return (
    <div>
      <BitteWidgetChat
        agentId="bitcoin-agent.xyz"
        apiUrl="/api/widget/chat"
        historyApiUrl="/api/widget/history"
        wallet={{ near: signedInWallet }}
      />
    </div>
  );
}
