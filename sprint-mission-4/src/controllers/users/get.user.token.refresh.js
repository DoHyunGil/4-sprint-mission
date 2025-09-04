import { setJwtTokens } from "../../../lib/token.js";
import TOKEN from "../../../lib/constants/jwt.tokens.js";
import createError from "http-error";

function userTokenRefresh(req, res, next) {
  try {
    const tokens = setJwtTokens(req, res);

    res.status(200).json({
      message: "세션 갱신",
      data: {
        accessHeader: tokens.accessToken,
        refreshHeader: tokens.refreshToken,
      },
    });
  } catch (err) {
    next(err);
  }
}

export default userTokenRefresh;
