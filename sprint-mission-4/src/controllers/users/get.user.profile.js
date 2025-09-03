import prisma from "../../../lib/prisma.js";

export default function getuserProfile(req, res, next) {
  const userId = Number(req.params.id);

  const user = prisma.user.findUnique({
    where: { id: userId },
    include: {
      likeProducts: true,
    },
  });

  res.status(200).json({
    data: {
      nickname: user.nickname,
      email: user.email,
    },
  });
}
