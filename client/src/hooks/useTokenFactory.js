import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import tokenFactoryABI from "../artifacts/tokenFactoryABI.json";

const useTokenFactory = () => {
  const { account } = useWeb3React();
  const web3 = new Web3(window.ethereum);
  const contractAddress = "0x58282656E7f409d2e76F43782a32b8963E132a70";
  let ERC20Factory_Token = new web3.eth.Contract(
    tokenFactoryABI,
    contractAddress
  );

  const createToken = async (nameToken, symbolToken) => {
    try {
      if (!account) {
        throw new Error("Please connect your Ethereum wallet (Metamask).");
      }

      await ERC20Factory_Token.methods
        .createToken(nameToken, symbolToken)
        .send({ from: account, gasPrice: "40000000000" });
    } catch (error) {
      console.error("Error creating token:", error.message);
      throw error;
    }
  };

  return { createToken };
};

export default useTokenFactory;
