//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract web3Food {

    address public owner;
    uint256 public maxFood = 0;
    uint256 public orderId = 0;

    constructor(address _owner) {
        // Set the owner of the contract to the address that deployed the contract
        owner = _owner;
    }

    event FoodAdded(string name, uint256 price, string description, string image, uint256 foodId);
    event FoodBought(address indexed buyer, string name, uint256 time, string tableId, uint256 orderId);

    struct food {
        string name;
        uint256 price;
        string description;
        string image;
        uint256 foodId;
    }

    struct order {
        string name;
        uint256 price;
        bool isPrepared;
        address buyer;
        string tableId;
        uint256 orderId;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    food[] private foods; // Mark as private
    order[] private orders; // Mark as private

    function addFood(string memory _name, uint256 _price, string memory _description, string memory _image) public {
        food memory newFood = food(_name, _price, _description, _image, maxFood);
        foods.push(newFood);
        emit FoodAdded(_name, _price, _description, _image, maxFood);
        maxFood++;
    }

    function getFood(uint256 _index) public view returns (food memory) {
        return foods[_index];
    }

    function buyFood(uint256 _index, string memory tableId) public payable {
        require(_index < foods.length, "Invalid food index");
        require(msg.value >= foods[_index].price, "Insufficient funds");
        require(keccak256(abi.encodePacked(tableId)) != keccak256(abi.encodePacked("")), "Please enter a table!");
        order memory newOrder = order(foods[_index].name, foods[_index].price, false, msg.sender, tableId,orderId);
        orders.push(newOrder);
        emit FoodBought(msg.sender, foods[_index].name, block.timestamp, tableId, orderId);
        orderId++;
    }

    function prepareOrder(uint256 _index) public onlyOwner {
        require(_index < orders.length, "Invalid order index");
        orders[_index].isPrepared = true;
    }

    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    // Function to get all orders
    function getAllOrders() public view returns (order[] memory) {
        return orders;
    }
}