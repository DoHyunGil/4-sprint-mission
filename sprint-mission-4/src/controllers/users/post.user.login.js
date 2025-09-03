import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../lib/token.js";
import {
  accessTokenOption,
  refreshTokenOption,
} from "../../../lib/cookie-options.js";
import TOKEN from "../../../lib/constants/jwt.tokens.js";
import passports from "../../../lib/passport/index.js";

export function loginUser(req, res, next) {
  passports.passport.authenticate(
    "local",
    { session: false },
    (err, user, info) => {
      console.log("로그인 시도");
      if (err) return next(err);
      if (!user)
        return res.status(401).json({ message: "로그인 실패, 유저 없음" });
      req.user = user;

      const accessHeader = generateAccessToken(req.user);
      const refreshHeader = generateRefreshToken(req.user);

      setTokenCookies(res, accessHeader, refreshHeader);

      res.status(200).json({
        message: "로그인",
        data: {
          accessHeader: accessHeader,
          refreshHeader: refreshHeader,
        },
      });
    }
  )(req, res, next);
}

export function logoutUser(req, res, next) {
  console.log("유저 정보 수신 : " + req.user.id);
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
