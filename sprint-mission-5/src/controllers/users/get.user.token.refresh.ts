import type { NextFunction, Request, Response } from "express";
import type { AuthReuqest } from "../../lib/passport/index.js";
import { setJwtTokens } from "../../lib/token.js";

function userTokenRefresh(req: Request, res: Response, next: NextFunction) {
  try {
    const authReq = req as AuthReuqest;
    const tokens = setJwtTokens(authReq, res);

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
