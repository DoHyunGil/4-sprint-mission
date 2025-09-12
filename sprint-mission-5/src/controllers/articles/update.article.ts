import prisma from "../../lib/prisma.js";
import type { AuthReuqest } from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";

const updateArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reqId = Number(req.params.id);
  const authReq = req as AuthReuqest;

  try {
    const result = await prisma.article.update({
      where: { id: reqId, ownerId: authReq.user.id },
      data: req.body,
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default updateArticle;
