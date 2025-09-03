import express from "express";
import API from "../controllers/users/index.js";
import passports from "../../lib/passport/index.js";

const router = express.Router();

const jwt_auth = passports.jwtAccess;

router.post("/register", API.createUser);
router.post("/login", API.loginUser);
router.post("/logout", jwt_auth, API.logoutUser);

export default router;
