import React from "react";
import CreateTokenForm from "../fetchers/createTokenForm";
import UseWallet from "../../services/connectWallet";
import { useWeb3React } from "@web3-react/core";

const HomePage = () => {
  const { account } = useWeb3React();
  const { connectWallet } = UseWallet();
  return (
    <div>
      <h1>ERC20 Token Deployment App</h1>
      {!account ? (
        <button onClick={connectWallet}>connect Wallet</button>
      ) : (
      `Wallet Address: ${account}`
      )}
      <CreateTokenForm />
    </div>
  );
};

export default HomePage;
