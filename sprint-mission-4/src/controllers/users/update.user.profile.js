import prisma from "../../../lib/prisma";

const updateUserProfile = async (req, res, next) => {
  const reqId = Number(req.params.id);

  const data = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: reqId },
      data: {
        data,
      },
    });

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export default updateUserProfile;
