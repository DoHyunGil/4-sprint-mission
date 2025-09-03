import prisma from "../../../lib/prisma";

const updateProduct = async (req, res) => {
  const reqId = Number(req.params.id);

  try {
    const product = await prisma.product.update({
      where: { id: reqId },
      data: checkedData,
    });

    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

export default updateProduct;
