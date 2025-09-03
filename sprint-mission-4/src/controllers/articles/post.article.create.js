import prisma from "../../../lib/prisma";

const createArticle = async (req, res, next) => {
  try {
    const reqId = Number(req.params.id);
    const article = await prisma.article.findUnique({ where: { id: reqId } });
    if (!article)
      return next(createError(400, "목표 데이터를 찾을 수 없습니다"));

    const result = await prisma.comment.create({
      data: {
        content: req.body.content,
        articleId: reqId,
      },
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default createArticle;
