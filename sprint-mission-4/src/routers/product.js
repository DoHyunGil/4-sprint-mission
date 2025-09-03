import express from "express";
import * as productValidation from "../schemas/product.js";
import * as commentValidation from "../schemas/comment.js";
import upload from "../../middlewares/multer.js";
import passports from "../../lib/passport/index.js";
import API from "../controllers/products/index.js";

const router = express.Router();
const auth = passports.jwtAccess;
router.post(
  "/",
  auth,
  productValidation.create,
  upload.single("Image"),
  API.createProduct
);

router.post(
  "/comments/:id",
  auth,
  commentValidation.create,
  API.createProductComment
);

router.get("/detail/:id", API.getProductDetail);

router.get("/list", API.getProductList);

router.get("/comments/:id", API.getProductComments);

router.patch("/:id", auth, productValidation.update, API.updateProduct);

router.patch(
  "/comments/:id",
  auth,
  commentValidation.create,
  API.updateProductComment
);

router.delete("/:id", auth, API.deleteProduct);

router.delete("/comments/:id", auth, API.deleteProductComment);

export default router;
