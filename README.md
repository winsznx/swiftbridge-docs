# swiftbridge-docs
# SwiftBridge

> Seamless crypto offramp/onramp, swaps, and P2P transfers on Base network

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Base Network](https://img.shields.io/badge/Network-Base-blue)](https://base.org)
[![Testnet](https://img.shields.io/badge/Status-Testnet-orange)](https://sepolia.basescan.org)

---

## 🌉 What is SwiftBridge?

SwiftBridge is a comprehensive crypto bridge solution that enables:
- **Offramp/Onramp**: Buy and sell crypto with Nigerian Naira
- **Token Swaps**: Exchange tokens via Uniswap V3
- **P2P Transfers**: Send crypto using Telegram usernames
- **Easy Access**: Via Telegram bot and web mini app

---

## 🏗️ Project Structure

```
SwiftBridge/
│
├── swiftbridge-contracts/    # Smart contracts on Base
│   ├── UserRegistry          # Username → wallet mapping
│   ├── EscrowManager         # Buy/sell escrow system
│   ├── P2PTransfer          # Send to @username
│   └── SwapRouter           # Token swaps
│
├── swiftbridge-bot/          # Telegram bot
│   ├── Commands              # /buy, /sell, /send, /swap
│   ├── Blockchain service    # Contract interactions
│   └── Rate service         # Exchange rates
│
└── swiftbridge-miniapp/      # Web mini app
    ├── Wallet connection     # Reown AppKit
    ├── Dashboard            # Balance view
    ├── Swap interface       # Token swaps
    └── Send interface       # P2P transfers
```

---

## 🚀 Quick Start

### For Users

**Via Telegram Bot:**
1. Open [@swiftbridgebot](https://t.me/swiftbridgebot)
2. Send `/start`
3. Register with `/register`
4. Start using SwiftBridge!

**Via Mini App:**
1. Visit [app.swiftbridge.com](https://your-url.vercel.app)
2. Connect your wallet
3. Swap, send, and manage crypto

### For Developers

```bash
# Clone all repositories
git clone https://github.com/SwiftBridge/swiftbridge-contracts
git clone https://github.com/SwiftBridge/swiftbridge-bot
git clone https://github.com/SwiftBridge/swiftbridge-miniapp

# Or use the org
git clone https://github.com/SwiftBridge/* --recursive
```

See individual README files in each repo for setup instructions.

---

## 📦 Deployed Addresses (Base Sepolia)

| Contract | Address |
|----------|---------|
| UserRegistry | [`0xFaaE...3667`](https://sepolia.basescan.org/address/0xFaaE04873914c0102B3c1aA5BCE05C51d0BD3667) |
| EscrowManager | [`0xBd52...2568`](https://sepolia.basescan.org/address/0xBd5287110A78d32A5435E97449BBA408E4F52568) |
| P2PTransfer | [`0x2B11...3774`](https://sepolia.basescan.org/address/0x2B1160DCAAbFBC21508629425901c809Db923774) |
| SwapRouter | [`0xb71A...0DCdf`](https://sepolia.basescan.org/address/0xb71A9C877B0C5CFee262E6039be2439964E0DCdf) |

---

## ✨ Features

### 🔗 Smart Contracts
- Username registration for easy P2P transfers
- Secure escrow system for fiat on/offramp
- P2P transfers using Telegram usernames
- Token swaps via Uniswap V3
- Fee collection mechanism

### 🤖 Telegram Bot
- `/buy <amount> <token>` - Buy crypto with Naira
- `/sell <amount> <token>` - Sell crypto for Naira
- `/send <amount> <token> to @username` - P2P transfers
- `/swap <amount> <from> to <to>` - Token swaps
- `/balance` - Check balances
- `/rates` - Live exchange rates

### 🎨 Mini App
- Connect any Web3 wallet (MetaMask, WalletConnect, etc.)
- Beautiful dashboard with portfolio overview
- Easy-to-use swap interface
- Send crypto to Telegram usernames
- Real-time balance updates

---

## 🛠️ Tech Stack

- **Smart Contracts**: Solidity, Hardhat, OpenZeppelin
- **Bot**: Node.js, Grammy, Ethers.js
- **Mini App**: Next.js, Reown AppKit, Wagmi, Tailwind
- **Blockchain**: Base (Sepolia testnet)

---

## 📊 Supported Tokens

- USDC - USD Coin
- WETH - Wrapped Ether
- *More tokens coming soon*

---

## 🎯 Roadmap

### ✅ Phase 1 - Testnet Launch (COMPLETED)
- Smart contract development
- Telegram bot
- Web mini app
- Base Sepolia deployment

### 🚧 Phase 2 - Mainnet Preparation
- Professional security audit
- Real payment processor integration
- Enhanced UI/UX
- Comprehensive testing

### 🔮 Phase 3 - Mainnet & Growth
- Deploy to Base mainnet
- Marketing campaign
- Partnerships
- User acquisition

### 💫 Phase 4 - Expansion
- Multi-chain support
- More tokens
- Advanced features
- Mobile apps

---

## 🔐 Security

### Current (Testnet)
- OpenZeppelin battle-tested contracts
- ReentrancyGuard on state-changing functions
- Access control and pausability
- ⚠️ **Not audited - testnet only**

### Future (Mainnet)
- Professional security audit
- Bug bounty program
- Comprehensive testing
- Insurance coverage

---

## 📖 Documentation

- [Project Summary](./PROJECT_SUMMARY.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
- [Contracts Documentation](./swiftbridge-contracts/README.md)
- [Bot Documentation](./swiftbridge-bot/README.md)
- [Mini App Documentation](./swiftbridge-miniapp/README.md)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Setup
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Base](https://base.org) - The blockchain platform
- [OpenZeppelin](https://openzeppelin.com) - Smart contract libraries
- [Uniswap](https://uniswap.org) - DEX protocol
- [Grammy](https://grammy.dev) - Telegram bot framework
- [Next.js](https://nextjs.org) - React framework
- [Reown](https://reown.com) - Wallet connection (WalletConnect)

---

## 💬 Community & Support

- **Telegram Bot**: [@swiftbridgebot](https://t.me/swiftbridgebot)
- **Support**: [@SwiftBridgeSupport](https://t.me/SwiftBridgeSupport)
- **Twitter**: [@SwiftBridge](https://twitter.com/swiftbridge)
- **GitHub**: [SwiftBridge](https://github.com/SwiftBridge)
- **Discord**: [Join our server](https://discord.gg/swiftbridge)

---

## ⚠️ Disclaimer

**TESTNET VERSION**: This is a testnet deployment on Base Sepolia for testing purposes only. Do not use with real funds. The smart contracts have not been professionally audited. Use at your own risk.

For production deployment on mainnet, comprehensive security audits and testing are required.

---

## 📈 Stats

- **Contracts Deployed**: 4
- **Lines of Code**: ~2,500
- **Bot Commands**: 10+
- **Supported Tokens**: 2 (growing)
- **Network**: Base Sepolia (testnet)

---

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐

---

<div align="center">

**Built with ❤️ for the Base ecosystem**

[Website](https://swiftbridge.app) • [Docs](https://docs.swiftbridge.app) • [Blog](https://blog.swiftbridge.app)

</div>
