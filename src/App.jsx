import { useState } from 'react';
import './App.css';
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { mainnet } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { Routes, Route } from 'react-router-dom';
import MoreInfo from './pages/MoreInfo.jsx';
import HomePage from './pages/HomePage.jsx';

const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

const metadata = {
  name: 'MakerDAO CDP Tracker',
  description: 'Tracker for MakerDAO CDPs',
  url: 'http://localhost:5173/',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
};

const networks = [mainnet];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
};

function App() {
  return (
    <main>
      <div className="flex">
        <appkit-button className="ml-auto" />
      </div>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/more-info/:id"
          element={<MoreInfo />}
        />
      </Routes>
    </main>
  )
}

export default App
