# 🏗 Scaffold-ETH 2
# web3Food

**web3Food** is a decentralized food ordering and management smart contract system built on the Ethereum blockchain. This project allows users to place food orders and enables the owner to manage these orders. It leverages smart contracts to handle food item listings, order processing, and status updates.

## Features

- **Add Food Items**: The owner can add new food items to the system with details such as name, price, description, and image.
- **Place Orders**: Users can place orders by specifying the food item index and a table number, and pay for their orders in Ether.
- **Manage Orders**: The owner can mark orders as prepared once they are ready.
- **View Orders**: Display a list of orders with their details and current status.

## Contract Functions

### `addFood`

Adds a new food item to the system.

**Parameters:**
- `string memory _name`: Name of the food item.
- `uint256 _price`: Price of the food item in Wei.
- `string memory _description`: Description of the food item.
- `string memory _image`: URL of the food item's image.

### `getFood`

Retrieves the details of a food item.

**Parameters:**
- `uint256 _index`: Index of the food item in the list.

**Returns:**
- `food memory`: Details of the food item.

### `buyFood`

Allows users to place an order.

**Parameters:**
- `uint256 _index`: Index of the food item to order.
- `string memory tableId`: Table number for the order.

**Requires:**
- Sufficient funds to cover the food item's price.

### `prepareOrder`

Marks an order as prepared.

**Parameters:**
- `uint256 _index`: Index of the order in the list.

**Requires:**
- Only the contract owner can call this function.

### `withdraw`

Allows the owner to withdraw the Ether balance of the contract.

## User Interface

The user interface provides the following features:

- **Admin Panel**: Allows the owner to view all orders, mark orders as prepared, and see the status of each order.
- **Order List**: Displays orders that are not yet prepared. If there are no unprepared orders, a message indicating "No Orders" is shown.

## Setup

1. **Deploy the Contract**

   Deploy the `web3Food` smart contract to the Ethereum network.

2. **Connect Your UI**

   Integrate the contract functions into your frontend using a library like `wagmi` for Ethereum interaction.

3. **Run the Application**

   Start your frontend application and interact with the smart contract via the user interface.

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd mweb3-food
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.# web3-Food-Website
