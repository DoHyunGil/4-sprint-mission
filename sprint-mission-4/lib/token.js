import jwt from "jsonwebtoken";
import TOKEN from "./constants/jwt.tokens";

export function generateAccessToken(user) {
  return jwt.sign({ id: user.id }, TOKEN.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}

export function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, TOKEN.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
}
