const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const TokenFactory = await ethers.getContractFactory("TokenFactory");
  const tokenFactory = await TokenFactory.deploy();
  await tokenFactory.deployed();
  console.log("MyContract deployed to:", tokenFactory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
