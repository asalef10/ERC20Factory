import React, { useState } from "react";
import useTokenFactory from "../../hooks/useTokenFactory";

const CreateTokenForm = () => {
  const { createToken } = useTokenFactory();
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");

  const handleCreateToken = (e) => {
    e.preventDefault();
    createToken(tokenName, tokenSymbol);
  };

  return (
    <div>
      <h2>Create ERC20 Token</h2>
      <form onSubmit={handleCreateToken}>
        <div>
          <label>
            Token Name:&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Token Symbol:&nbsp;
            <input
              type="text"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
            />
          </label>
        </div>
        &nbsp;
        <div>
          <button type="submit">Create Token</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTokenForm;
