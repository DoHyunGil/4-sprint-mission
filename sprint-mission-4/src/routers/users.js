import express from "express";
import API from "../controllers/users/index.js";
import passport from "../../lib/passport/index.js";
import TOKEN from "../../lib/constants/jwt.tokens.js";

const router = express.Router();

const jwt_auth = passport.authenticate(TOKEN.ACCESS_TOKEN_COOKIE_NAME, {
  session: false,
});

router.post("/register", API.createUser);
router.post("/login", API.loginUser);
router.post("/logout", jwt_auth, API.logoutUser);

export default router;
