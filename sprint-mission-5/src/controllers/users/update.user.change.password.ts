import prisma from "../../lib/prisma.js";
import bcrypt from "bcrypt";
import createError from "http-errors";
import type { AuthReuqest } from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";

export default async function updateUserChangePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authReq = req as AuthReuqest;

  try {
    const password = authReq.body.password;

    const data = await prisma.user.findUnique({
      where: {
        id: authReq.user.id,
      },
      select: {
        password,
      },
    });

    if (!data) {
      return next(createError(404, "유저를 찾을 수 없습니다."));
    }

    const isPasswordValid = await bcrypt.compare(password, data.password);

    if (!isPasswordValid) {
      return next(createError(400, "암호가 올바르지 않음"));
    }

    await prisma.user.update({
      where: {
        id: authReq.user.id,
      },
      data: {
        password: password,
      },
    });

    res.status(200).json({ message: "변경 성공함" });
  } catch (err) {
    next(err);
  }
}
