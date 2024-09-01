import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract, parseEther } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("web3Food", {
    from: deployer,
    // Contract constructor arguments
    args: ["0xfb8b972b0D1cF9BB242A40F7AEA8E9a1bF89E0E3"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const web3Food = await hre.ethers.getContract<Contract>("web3Food", deployer);

  await web3Food.addFood(
    "Sushi",
    parseEther("0.009"),
    "Traditional Japanese dish with vinegared rice and seafood",
    "sushi.jpg",
  );

  await web3Food.addFood(
    "Tacos",
    parseEther("0.003"),
    "Mexican dish with soft or hard tortilla filled with meat, cheese, and vegetables",
    "tacos.jpg",
  );

  await web3Food.addFood(
    "Croissant",
    parseEther("0.002"),
    "French buttery, flaky, and crescent-shaped pastry",
    "croissant.jpg",
  );

  await web3Food.addFood(
    "Lasagna",
    parseEther("0.006"),
    "Italian baked pasta dish with layers of meat, cheese, and tomato sauce",
    "lasagna.jpg",
  );

  await web3Food.addFood(
    "Burger",
    parseEther("0.005"),
    "Classic American sandwich with a beef patty, lettuce, tomato, and cheese",
    "burger.jpg",
  );

  await web3Food.addFood(
    "Buffalo Wings",
    parseEther("0.003"),
    "Spicy chicken wings served with blue cheese dressing",
    "buffalo-wings.jpg",
  );

  await web3Food.addFood(
    "Mac and Cheese",
    parseEther("0.004"),
    "Baked pasta dish with creamy cheese sauce",
    "mac-and-cheese.jpg",
  );
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];
