import { createContext } from "react";
import { Wallet } from "@/services/near-wallet";

export const NearContext = createContext({
  wallet: Wallet,
  signedAccountId: "",
});
