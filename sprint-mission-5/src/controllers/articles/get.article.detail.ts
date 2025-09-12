import prisma from "../../lib/prisma.js";
import type { AuthReuqest } from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";

const getArticleDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reqId = Number(req.params.id);
  const authReq = req as AuthReuqest;

  try {
    const article = await prisma.article.findUniqueOrThrow({
      where: {
        id: reqId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        likedUsers: {
          where: {
            id: authReq.user.id,
          },
        },
      },
    });

    const isLiked = article.likedUsers.length > 0;

    const result = {
      id: article.id,
      name: article.title,
      description: article.content,
      isLiked: isLiked,
      createdAt: article.createdAt,
    };

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default getArticleDetail;
