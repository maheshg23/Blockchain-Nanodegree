//Encoding and Decoding 
fs = require('fs')

imageReadBuffer = fs.readFileSync("cat.jpeg")

imageHexEncode = Buffer.from(imageReadBuffer).toString('hex');
console.log(imageHexEncode);

var imgageHexDecode = Buffer.from(imageHexEncode,'hex')
fs.writeFileSync('catDecoded.png',imgageHexDecode)