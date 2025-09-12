import type { AuthReuqest } from "../../lib/passport/index.js";
import type { NextFunction, Request, Response } from "express";
import prisma from "../../lib/prisma.js";

const deleteArticleComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reqId = Number(req.params.id);
  const authReq = req as AuthReuqest;

  try {
    await prisma.comment.delete({
      where: { id: reqId, ownerId: authReq.user.id },
    });

    res.status(200).json({ message: "Delete Success" });
  } catch (err) {
    next(err);
  }
};

export default deleteArticleComment;
