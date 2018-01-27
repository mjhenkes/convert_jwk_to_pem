
var fs = require('fs');
var path = require('path');

var jwkToPem = require('jwk-to-pem'),
  jwt = require('jsonwebtoken');

var jwkPath = path.join(__dirname, 'jwks-key-pair.json');
var jwk = JSON.parse(fs.readFileSync(jwkPath, 'utf8'));
var pem = jwkToPem(jwk,{ private: true });

var pemPath = path.join(__dirname, 'ecprivkey.pem');
fs.writeFileSync(pemPath, pem);
// jwt.verify(token, pem);

console.log(pem)
