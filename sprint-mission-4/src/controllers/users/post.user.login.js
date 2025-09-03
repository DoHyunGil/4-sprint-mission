import { generateAccessToken, generateRefreshToken } from "../../lib/token.js";
import {
  accessTokenOption,
  refreshTokenOption,
} from "../../lib/cookie-options.js";
import TOKEN from "../../lib/constants/jwt.tokens.js";

export function loginUser(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "비인가" });
  }

  setTokenCookies(
    res,
    generateAccessToken(req.user),
    generateRefreshToken(req.user)
  );

  res.status(200).json({ message: "로그인" });
}
export function logoutUser(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "비인가" });
  }

  clearTokenCookies;

  res.status(200).json({ message: "로그아웃" });
}

function setTokenCookies(res, accessToken, refreshToken) {
  res.cookie(TOKEN.ACCESS_TOKEN_COOKIE_NAME, accessToken, accessTokenOption);
  res.cookie(TOKEN.REFRESH_TOKEN_COOKIE_NAME, refreshToken, refreshTokenOption);
}

function clearTokenCookies(res) {
  res.clearCookie(TOKEN.ACCESS_TOKEN_COOKIE_NAME);
  res.clearCookie(TOKEN.REFRESH_TOKEN_COOKIE_NAME);
}
