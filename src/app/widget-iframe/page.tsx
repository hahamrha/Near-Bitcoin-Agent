"use client";

import { useContext } from "react";
import { BitteWidgetChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/styles.css";
import { NearContext } from "@/context/context";

export default function WidgetIframePage() {
  const { wallet, signedAccountId, signedInWallet } = useContext(NearContext);

  return (
    <div style={{ background: "transparent" }}>
      <BitteWidgetChat
        agentId="bitcoin-agent.xyz"
        apiUrl="/api/chat"
        wallet={{
          near: {
            wallet: signedInWallet,
            account: signedInWallet,
            accountId: signedAccountId,
            nearWalletId: signedAccountId,
          },
        }}
      />
    </div>
  );
}
