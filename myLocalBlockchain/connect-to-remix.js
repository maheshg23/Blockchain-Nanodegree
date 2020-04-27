var Web3 = require("web3")  
var EthereumTransaction = require('ethereumjs-tx').Transaction;
var web3 = new Web3('HTTP://127.0.0.1:7545')
// console.log(web3)

web3.eth.getTransactionCount('0x09e4b799C5E7B9ECeCA6D326C634Fa2FD171b311').then(console.log);
