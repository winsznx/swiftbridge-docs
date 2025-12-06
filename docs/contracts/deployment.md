# Deployment Guide

This guide covers how to deploy the SwiftBridge smart contracts to a new network.

## Prerequisites

- **Node.js** v18+
- **Hardhat**
- **Wallet** with native gas tokens for the target network.
- **RPC URL** for the network.

## Configuration

1. Set up your `.env` file:
   ```env
   PRIVATE_KEY=your_private_key
   BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
   ETHERSCAN_API_KEY=your_verification_key
   ```

2. Review `hardhat.config.js` network settings.

## Deployment Steps

Run the deployment script:

```bash
npx hardhat run scripts/deploy.js --network base-sepolia
```

This script will:
1. Deploy `UserRegistry`.
2. Deploy `EscrowManager`.
3. Deploy `P2PTransfer` linked to `UserRegistry`.
4. Deploy `SwapRouter`.
5. Verify all contracts on Etherscan/BaseScan.

## Post-Deployment

- Update the **Deployed Addresses** page in the docs.
- Update the **Bot** and **Mini App** configuration with new addresses.
