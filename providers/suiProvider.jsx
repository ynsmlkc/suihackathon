import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
        <WalletProvider>
          <YourApp />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
