import { setJwtTokens } from "../../lib/token.js";
import passports, {
  type AuthedUser,
  type AuthReuqest,
} from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";

export default function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  passports.passport.authenticate(
    "local",
    { session: false },
    (err: Error, user: AuthedUser, info: any) => {
      console.log("로그인 시도");
      if (err) return next(err);
      if (!user)
        return res.status(401).json({ message: "로그인 실패, 유저 없음" });

      let authedUser = req as AuthReuqest;
      authedUser.user = user;

      const tokens = setJwtTokens(authedUser, res);

      res.status(200).json({
        message: "로그인",
        data: {
          accessHeader: tokens.accessToken,
          refreshHeader: tokens.refreshToken,
        },
      });
    }
  )(req, res, next);
}
