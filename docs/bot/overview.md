# Telegram Bot

The **SwiftBridge Telegram Bot** is the primary interface for many users, offering a chat-based experience for crypto operations.

## Architecture

The bot is built using **Grammy** (Node.js framework) and runs as a polling service (or webhook in production).

- **Interaction**: Commands (`/start`, `/buy`) and Interactive Menus (Inline Keyboards).
- **Wallet Management**: It generates a non-custodial wallet (encrypted) or allows linking an existing one.
- **Notifications**: Real-time alerts for incoming transfers, swap completions, and escrow updates.

## Setup

1. Create a bot with [@BotFather](https://t.me/BotFather).
2. Configure `.env`:
   ```env
   BOT_TOKEN=your_token_from_botfather
   RPC_URL=https://sepolia.base.org
   CONTRACT_ADDRESSES=...
   ```
3. Run `npm run dev`.

## User Flow

### Registration
User sends `/start`. The bot checks `UserRegistry`. If unrelated, prompts to `/register`.

### Buying
User sends `/buy 100 USDC`. Bot creates an escrow invoice. User pays fiat. Seller releases.

### Support
The bot includes a support ticketing system that forwards messages to admin groups.
