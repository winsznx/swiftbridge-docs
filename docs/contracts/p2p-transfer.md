# P2PTransfer

The **P2PTransfer** contract facilitates peer-to-peer crypto transfers using Telegram usernames.

## logic

The contract interacts closely with the `UserRegistry` to resolve destinations.

1. **Sender** initiates transfer to `@username`.
2. **Contract** queries `UserRegistry` for the address.
3. **If Registered**: Tokens are transferred immediately to the recipient's wallet.
4. **If Unregistered**: Tokens are held in a pending state until the user registers.

## Pending Transfers

When sending to an unregistered user:
- Funds are locked in the contract.
- The recipient receives a notification to register.
- Upon registration, `claimPendingTransfers()` is called to deliver funds.

## Key Functions

### `transferToUsername(string memory username, address token, uint256 amount)`
Sends tokens to a user by username.

### `claimPendingTransfers()`
Withdraws any pending transfers waiting for the caller's username registration.

### `cancelPendingTransfer(uint256 transferId)`
Allows the sender to reclaim funds if the recipient hasn't registered within a time limit.
