"use client";
import "@mysten/dapp-kit/dist/index.css";

import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const SuiProvider = ({ children }) => {
  const queryClient = new QueryClient();
  const networks = {
    devnet: { url: getFullnodeUrl("devnet") },
    mainnet: { url: getFullnodeUrl("mainnet") },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networks} defaultNetwork="devnet">
        <WalletProvider>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default SuiProvider;
