import { PrismaClient } from "@prisma/client";
import express from "express";
import * as articleValidation from "../schemas/article.js";
import * as commentValidation from "../schemas/comment.js";
import upload from "../../middlewares/multer.js";
import API from "../controllers/articles/index.js";
import passport from "../../lib/passport/index.js";
import TOKEN from "../../lib/constants/jwt.tokens.js";

const router = express.Router();
const auth = passport.authorize(TOKEN.ACCESS_TOKEN_COOKIE_NAME, {
  session: false,
});

router.post(
  "/",
  auth,
  articleValidation.create,
  upload.single("Image"),
  API.createArticle
);

router.post(
  "/comments/:id",
  auth,
  commentValidation.create,
  API.createArticleComment
);

router.get("/detail/:id", API.getArticleDetail);

router.get("/list", API.getArticleList);

router.get("/comments/:id", API.getArticleComment);

router.patch("/:id", auth, articleValidation.update, API.updateArticle);

router.patch(
  "/comments/:id",
  auth,
  commentValidation.create,
  API.updateArticleComment
);

router.delete("/:id", auth, API.deleteArticle);

router.delete("/comments/:id", auth, API.deleteArticleComment);

export default router;
