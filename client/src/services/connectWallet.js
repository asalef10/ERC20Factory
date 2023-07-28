import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
const injected = new InjectedConnector({
  supportedChainIds: [1337, 80001, 1],
});
const UseWallet = () => {
  const { activate } = useWeb3React();
  const connectWallet = () => {
    if (window.ethereum) {
      activate(injected);
    } else {
      alert("You Need Metamask wallet");
    }
  };
  return {
    connectWallet,
  };
};
export default UseWallet;
