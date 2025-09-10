import prisma from "../../lib/prisma.js";
import type { AuthReuqest } from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";

const updateUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authReq = req as AuthReuqest;
  try {
    const result = await prisma.user.update({
      where: { id: authReq.user.id },
      data: authReq.body,
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default updateUserProfile;
