import deleteProduct from "./delete.product";
import deleteProductComment from "./delete.product.comment";
import getProductComments from "./get.product.comments";
import getProductDetail from "./get.product.detail";
import getProductList from "./get.product.list";
import createProductComment from "./post.product.comment.create";
import createProduct from "./post.product.create";
import updateProduct from "./update.product";
import updateProductComment from "./update.product.comment";

const productAPI = {
  createProduct,
  createProductComment,
  getProductComments,
  getProductDetail,
  getProductList,
  updateProduct,
  updateProductComment,
  deleteProduct,
  deleteProductComment,
};

Object.freeze(productAPI);

export default productAPI;
