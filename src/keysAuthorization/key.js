const selfsigned = require('selfsigned');
const jwt = require('jsonwebtoken')

var pems = selfsigned.generate(null, { clientCertificate: true });

// const beginPrivate = '------BEGIN RSA PRIVATE KEY------'
// const endPrivate = '-----END RSA PRIVATE KEY---------'
// const beginPublic = '-----BEGIN RSA PRIVATE KEY-----\r\n'
// const endPublic = '-----END RSA PRIVATE KEY------\r\n'
// const publicKey = pems.clientprivate.slice(beginPublic.length,-endPublic.length)
// const privateKey = pems.private.slice(beginPrivate.length,-endPrivate.length)

module.exports = pems
