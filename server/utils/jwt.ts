import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function generateToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function generateTempToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "5m" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
