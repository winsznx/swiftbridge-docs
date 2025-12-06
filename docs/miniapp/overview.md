# Mini App

The **SwiftBridge Mini App** is a web-based interface optimized for mobile and desktop, providing a rich UI for DeFi interactions.

## Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Wallet Connection**: Reown AppKit (formerly WalletConnect)
- **State Management**: Wagmi / Viem

## Features

- **Unified Dashboard**: View assets across multiple tokens.
- **Visual Swap**: Charting and easy token selection for swapping.
- **Address Book**: Manage saved contacts for P2P transfers.
- **Transaction History**: Filterable list of past activities.

## Development

The Mini App is designed to be embedded in Telegram (via Web App) or accessed directly in a browser.

### Running Locally

```bash
cd swiftbridge-miniapp
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app.

## Integration

The Mini App communicates with the smart contracts directly via the user's connected wallet (MetaMask, Coinbase Wallet, etc.), ensuring non-custodial security.
