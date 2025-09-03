import prisma from "../../../lib/prisma.js";

const updateArticleComment = async (req, res, next) => {
  const reqId = Number(req.params.id);

  try {
    const result = await prisma.comment.update({
      where: { id: reqId },
      data: {
        content: req.body.content,
      },
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default updateArticleComment;
