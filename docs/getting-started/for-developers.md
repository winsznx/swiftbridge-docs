# Developer Guide

Welcome developers! SwiftBridge is designed to be developer-friendly. Whether you want to integrate with our protocols or contribute to the codebase, this guide is for you.

## Quick Start

1. **Clone the Repositories**:
   ```bash
   git clone https://github.com/SwiftBridge/swiftbridge-contracts
   git clone https://github.com/SwiftBridge/swiftbridge-bot
   ```

2. **Install Dependencies**:
   Navigate to each directory and run:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Copy `.env.example` to `.env` and fill in your API keys and configuration.

## Smart Contracts

Our contracts are deployed on **Base Sepolia**.

- **Framework**: Hardhat
- **Solidity Version**: 0.8.20

Check out the [Smart Contracts Overview](/docs/contracts/overview) for deep dives into specific contracts.

## Running Locally

### Contracts
```bash
npx hardhat test
```

### Bot
```bash
npm run dev
```

## Contributing

We welcome Pull Requests! Please follow our contribution guidelines in `CONTRIBUTING.md` in each repository.
