//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract DevilFruit {
    string fruit;

    function setFruit(string memory _fruit) public {
        fruit = _fruit;
    }

    function getFruit() public view returns (string memory) {
        return fruit;
    }
}
