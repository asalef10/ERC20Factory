// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/presets/~ERC20PresetFixedSupply.sol"; 

contract Token is ERC20PresetFixedSupply {
    constructor(string memory name, string memory sym)
        ERC20PresetFixedSupply(name, sym, 10 * (10 ** uint256(decimals())), msg.sender)
    {}
}
