//####### CONFIGURATION #######

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
// var EthereumTransaction = require("ethereumjs-tx") 
var EthereumTransaction = require('ethereumjs-tx').Transaction;
var web3 = new Web3('https://rinkeby.infura.io/v3/264c6913a5524f61ab70544cac16a198')
// console.log(web3)

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0xc677420923196099E2e3feF15761dde98F3c90FF' 
var receivingAddress = '0xF66275976A1f61b2B4a20406bCADc1Ad7853928c'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// ####### CREATE A TRANSACTION #######

// -- Step 4: Set up the transaction using the transaction variables as shown 
var data1 = "First Transaction";

var rawTransaction = { 
    nonce: 0, 
    to: receivingAddress, 
    gasPrice: 20000000, 
    gasLimit: 30000, 
    value: 100, 
    data: "0x" + Buffer.from(data1,'hex')
}

// -- Step 5: View the raw transaction 
console.log(rawTransaction);

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

//####### Sign the Transaction #######

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = '73A21AA39730E4476876581BB71B1660E42CA84C70AE20E070CC31130A9A6B3D' 
var privateKeySenderHex = Buffer.from(privateKeySender, 'hex') 
var transaction = new EthereumTransaction(rawTransaction,{chain:'ropsten'}) 
transaction.sign(privateKeySenderHex)

// ####### Send the transaction to the network #######

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
// web3.eth.sendSignedTransaction(serializedTransaction);
web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'))


