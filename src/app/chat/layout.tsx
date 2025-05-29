import { NearProvider } from "@/context/NearProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <BitteWalletContextProvider>{children}</BitteWalletContextProvider>
    </body>
  );
}
