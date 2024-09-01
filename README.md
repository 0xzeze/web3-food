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

- Solidity 0.8.x
- Ethereum-compatible network (e.g., Ethereum, Polygon)
- Web3 provider (e.g., MetaMask)
- JavaScript/TypeScript frontend framework

## Installation

Clone this repository and install the required dependencies:

```bash
git clone https://github.com/your-username/web3Food.git
cd web3Food
npm install
```