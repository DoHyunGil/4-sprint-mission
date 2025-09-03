import express from "express";
import API from "../controllers/users/index.js";
import passport from "../../lib/passport/index.js";
import TOKEN from "../../lib/constants/jwt.tokens.js";

const router = express.Router();
const auth = passport.authorize(TOKEN.ACCESS_TOKEN_COOKIE_NAME, {
  session: false,
});

router.post("/register", API.createUser);
router.post("/login", auth, API.loginUser);
router.post("/logout", auth, API.logoutUser);

export default router;
