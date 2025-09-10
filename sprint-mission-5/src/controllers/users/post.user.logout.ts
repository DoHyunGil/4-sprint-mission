import type { NextFunction, Request, Response } from "express";
import type { AuthReuqest } from "../../lib/passport/index.js";
import { clearJwtTokenCookies } from "../../lib/token.js";
import createHttpError from "http-errors";

export default function logoutUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authReq = req as AuthReuqest;
  console.log("유저 정보 수신 : " + authReq.user.id);

  if (!authReq.user) {
    return next(createHttpError(401, "비인가 유저"));
  }

  clearJwtTokenCookies(res);

  res.status(200).json({ message: "로그아웃" });
}
