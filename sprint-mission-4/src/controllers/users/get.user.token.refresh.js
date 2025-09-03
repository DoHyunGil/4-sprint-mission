import { setJwtTokens } from "../../../lib/token.js";

function userTokenRefresh(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "비인가" });
  }
  const tokens = setJwtTokens(req, res);

  res.status(200).json({
    message: "로그인",
    data: {
      accessHeader: tokens.accessHeader,
      refreshHeader: tokens.refreshHeader,
    },
  });
}

export default userTokenRefresh;
