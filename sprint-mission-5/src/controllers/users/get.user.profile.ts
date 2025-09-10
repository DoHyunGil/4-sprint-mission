import type { NextFunction, Request, Response } from "express";
import type { AuthReuqest } from "../../lib/passport/index.js";
import prisma from "../../lib/prisma.js";

export default async function getUserProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authReq = req as AuthReuqest;

  try {
    const user = await prisma.user.findUnique({
      where: { id: authReq.user.id },
      select: {
        email: true,
        nickname: true,
        image: true,
        myProducts: {
          select: {
            name: true,
          },
        },
        createdAt: true,
      },
    });

    res.status(200).json({
      data: { ...user },
    });
  } catch (err) {
    next(err);
  }
}
