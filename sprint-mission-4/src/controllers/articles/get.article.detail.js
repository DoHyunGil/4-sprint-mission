import prisma from "../../../lib/prisma";

const getArticleDetail = async (req, res, next) => {
  const reqId = Number(req.params.id);

  try {
    const result = await prisma.article.findUniqueOrThrow({
      where: {
        id: reqId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
      },
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default getArticleDetail;
