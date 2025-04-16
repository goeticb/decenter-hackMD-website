# MakerDAO CDP Tracker

A simple, fast, and user-friendly interface to search and view details about MakerDAO CDPs (Collateralized Debt Positions).

🔍 **Search by CDP ID** and view key info like:
- Collateral type and amount
- Debt (with and without interest)
- Collateralization ratio
- Liquidation ratio
- Max withdrawable collateral
- Max additional debt

💡 Users can also connect a wallet and **sign a message** to prove ownership of a CDP.

---

## 🚀 Tech Stack

- React
- Viem (EVM interaction)
- TailwindCSS
- Vite
- Wagmi + Reown AppKit (wallet integration)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/cdp-tracker.git
cd cdp-tracker
```

### 2. Install Dependencies

```bash
nmp install
```

### 3. Create your .env file

Copy `.env.example` and rename it to `.env`, then fill in the required values.

⚠️ The app will still run without a `.env` file, but:
- "Wallet connection will only work through an injected provider like MetaMask"
- "RPC requests will fallback to Viem's default public endpoints, which are rate-limited and unreliable"

For a **free and fast RPC** with high reliability and minimal request restrictions, we recommend [Tenderly Gateway](https://mainnet.gateway.tenderly.co).

### 4. Start a server

You have two options to run the project:

1. **Development Mode**
   This will start a local server with hot reloading and helpful warnings:
   ```bash
   npm run dev
   ```

2. **Production Mode**
   The project is already configured for production. You can build and preview it like this:
   ```bash
   npm run build
   npm run preview
   ```
