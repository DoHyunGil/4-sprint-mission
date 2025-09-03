import prisma from "../../../lib/prisma";

const deleteArticle = async (req, res, next) => {
  const reqId = Number(req.params.id);

  try {
    await prisma.article.delete({
      where: { id: reqId },
    });

    res.status(200).json({ message: "Delete Success" });
  } catch (err) {
    next(err);
  }
};

export default deleteArticle;
