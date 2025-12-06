# UserRegistry

The **UserRegistry** contract is the core identity layer of SwiftBridge. It maps Telegram usernames to wallet addresses, enabling the Username System.

## Features

- **Registration**: Link a Telegram username to a wallet address.
- **Uniqueness**: Ensures usernames are unique across the platform.
- **Updates**: Users can update their username (subject to a cooldown period).
- **Lookup**: Efficiently query wallet addresses by username and vice versa.

## Key Functions

### `registerUsername(string memory username)`
Registers a new username for the caller's address.
- **Requirements**: Username must be available and valid format.

### `updateUsername(string memory newUsername)`
Updates the caller's username.
- **Cooldown**: 7 days between updates.

### `getAddress(string memory username)`
Returns the wallet address associated with a username.

### `getUsername(address userAddress)`
Returns the username associated with a wallet address.

## Events

- `UserRegistered(address indexed user, string username)`
- `UsernameUpdated(address indexed user, string oldUsername, string newUsername)`
