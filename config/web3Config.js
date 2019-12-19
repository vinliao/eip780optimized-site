const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require('./../mnemonic');
const rpc = require('./../rpc');
const provider = new HDWalletProvider(mnemonic, rpc)
// console.log(mnemonic);
let web3 = new Web3(provider);

module.exports = web3;