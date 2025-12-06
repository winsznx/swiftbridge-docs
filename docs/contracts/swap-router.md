# SwapRouter

The **SwapRouter** contract interfaces with Uniswap V3 to enable token swaps directly within SwiftBridge.

## Features

- **Best Execution**: Routes trades through the most liquid pools.
- **Slippage Protection**: Users can define maximum slippage tolerance.
- **Fee Collection**: Integrates a protocol fee on swaps.

## Supported Pools

Currently configured for the following pools on Base Sepolia:
- USDC/WETH
- WETH/USDC

*(Note: More pools can be added via governance)*

## Key Functions

### `swapExactInputSingle(...)`
Swaps a fixed amount of input tokens for the maximum possible amount of output tokens.

### `swapExactOutputSingle(...)`
Swaps to receive a specific amount of output tokens, determining the required input.

### `quote(...)`
Provides a price quote for a potential swap without executing it.
