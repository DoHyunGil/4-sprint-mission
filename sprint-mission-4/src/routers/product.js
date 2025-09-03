import express from "express";
import * as productValidation from "../schemas/product.js";
import * as commentValidation from "../schemas/comment.js";
import upload from "../../middlewares/multer.js";
import passport from "../../lib/passport/index.js";
import API from "../controllers/products/index.js";

const router = express.Router();

router.post(
  "/",
  productValidation.create,
  upload.single("Image"),
  API.createProduct
);

router.post(
  "/comments/:id",
  commentValidation.create,
  API.createProductComment
);

router.get("/detail/:id", API.getProductDetail);

router.get("/list", API.getProductList);

router.get("/comments/:id", API.getProductComments);

router.patch("/:id", productValidation.update, API.updateProduct);

router.patch(
  "/comments/:id",
  commentValidation.create,
  API.updateProductComment
);

router.delete("/:id", API.deleteProduct);

router.delete("/comments/:id", API.deleteProductComment);

export default router;
