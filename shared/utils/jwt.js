const jwt = require('jsonwebtoken');

const signToken = (payload, secret, expiresIn = '1d') =>
  jwt.sign(payload, secret, { expiresIn });

const verifyToken = (token, secret) => jwt.verify(token, secret);

module.exports = { signToken, verifyToken };
