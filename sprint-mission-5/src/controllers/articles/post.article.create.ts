import prisma from "../../lib/prisma.js";
import type { AuthReuqest } from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authReq = req as AuthReuqest;
  try {
    const result = await prisma.article.create({
      data: {
        ...req.body,
        owner: {
          connect: {
            id: authReq.user.id,
          },
        },
      },
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default createArticle;
