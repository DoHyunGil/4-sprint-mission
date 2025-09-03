import prisma from "../../../lib/prisma";

const getProductDetail = async (req, res, next) => {
  const reqId = Number(req.params.id);

  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: {
        id: reqId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        tags: true,
        createdAt: true,
      },
    });

    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

export default getProductDetail;
