export default productAPI;
declare namespace productAPI {
    export { createProduct };
    export { createProductComment };
    export { getProductComments };
    export { getProductDetail };
    export { getProductList };
    export { updateProduct };
    export { updateProductComment };
    export { deleteProduct };
    export { deleteProductComment };
    export { ProductLike };
    export { getLikeProducts };
}
import createProduct from "./post.product.create.js";
import createProductComment from "./post.product.comment.create.js";
import getProductComments from "./get.product.comments.js";
import getProductDetail from "./get.product.detail.js";
import getProductList from "./get.product.list.js";
import updateProduct from "./update.product.js";
import updateProductComment from "./update.product.comment.js";
import deleteProduct from "./delete.product.js";
import deleteProductComment from "./delete.product.comment.js";
import ProductLike from "./post.product.like.js";
import getLikeProducts from "./get.like.products.js";
//# sourceMappingURL=index.d.ts.map