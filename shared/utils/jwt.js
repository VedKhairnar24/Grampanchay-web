import jwt from "jsonwebtoken";

export const generateToken = (payload, secret) =>
  jwt.sign(payload, secret, { expiresIn: "1d" });

export const verifyToken = (token, secret) =>
  jwt.verify(token, secret);
