//####### CONFIGURATION #######

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
// var EthereumTransaction = require("ethereumjs-tx") 
var EthereumTransaction = require('ethereumjs-tx').Transaction;
var web3 = new Web3('HTTP://127.0.0.1:7545')
// console.log(web3)

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0x09e4b799C5E7B9ECeCA6D326C634Fa2FD171b311' 
var receivingAddress = '0xCAb0e07A7108728Ba3Ac020C2161F68B0B80A13a'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// ####### CREATE A TRANSACTION #######

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction = { 
    nonce: 1, 
    to: receivingAddress, 
    gasPrice: 20000000, 
    gasLimit: 30000, 
    value: 100, 
    data: "0x0"
}

// -- Step 5: View the raw transaction 
console.log(rawTransaction);

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

//####### Sign the Transaction #######

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = 'cbcee7f115d7263b8d7ac0ed5ea1ae9a587d03f4f5de0556071765c2ec533881' 
var privateKeySenderHex = Buffer.from(privateKeySender, 'hex') 
var transaction = new EthereumTransaction(rawTransaction) 
transaction.sign(privateKeySenderHex)

// ####### Send the transaction to the network #######

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);
