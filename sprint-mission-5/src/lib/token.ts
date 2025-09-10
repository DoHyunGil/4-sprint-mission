import jwt from "jsonwebtoken";
import TOKEN from "./constants/jwt.tokens.js";
import * as cookieOptions from "./cookie-options.js";
import type { Request, Response } from "express";
import type { AuthedUser, AuthReuqest } from "./passport/index.js";

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

function generateAccessToken(user: AuthedUser) {
  return jwt.sign({ id: user.id }, TOKEN.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}

function generateRefreshToken(user: AuthedUser) {
  return jwt.sign({ id: user.id }, TOKEN.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
}

function setTokenCookies(res: Response, tokens: Tokens) {
  res.cookie(
    TOKEN.ACCESS_TOKEN_COOKIE_NAME,
    tokens.accessToken,
    cookieOptions.accessTokenOption
  );
  res.cookie(
    TOKEN.REFRESH_TOKEN_COOKIE_NAME,
    tokens.refreshToken,
    cookieOptions.refreshTokenOption
  );
}

export function setJwtTokens(req: AuthReuqest, res: Response) {
  const user = req.user;

  const tokens = {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
  };

  setTokenCookies(res, tokens);

  return tokens;
}

export function clearJwtTokenCookies(res: Response) {
  res.clearCookie(TOKEN.ACCESS_TOKEN_COOKIE_NAME);
  res.clearCookie(TOKEN.REFRESH_TOKEN_COOKIE_NAME);
}
