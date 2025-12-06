# EscrowManager

The **EscrowManager** contract handles secure buy and sell operations for the fiat onramp/offramp features.

## Workflows

### Buying Crypto
1. **Creation**: User initiates a buy order. Bot creates an escrow with the amount.
2. **Locking**: Seller deposits crypto into the escrow.
3. **Payment**: Buyer sends fiat payment.
4. **Release**: Seller confirms payment, and tokens are released to the buyer.

### Selling Crypto
1. **Creation**: Seller creates a sell order and locks crypto.
2. **Matching**: Buyer accepts the order.
3. **Payment**: Buyer sends fiat.
4. **Release**: Seller confirms receipt, unlocking tokens.

## Security

- **Timeouts**: Escrows automatically expire if not completed within 24 hours.
- **Disputes**: Admin intervention mechanism for disputed transactions.
- **Funds Safety**: Tokens are held in the contract until specific conditions are met.

## Key Functions

### `createEscrow(...)`
Initializes a new escrow transaction.

### `releaseEscrow(uint256 escrowId)`
Releases funds to the buyer.

### `cancelEscrow(uint256 escrowId)`
Cancels a pending escrow and returns funds to the seller.
