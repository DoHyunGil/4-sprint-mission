export default articleApi;
declare namespace articleApi {
    export { createArticleComment };
    export { createArticle };
    export { getArticleDetail };
    export { getArticleList };
    export { getArticleComment };
    export { updateArticle };
    export { updateArticleComment };
    export { deleteArticle };
    export { deleteArticleComment };
}
import createArticleComment from "./post.article.comment.create.js";
import createArticle from "./post.article.create.js";
import getArticleDetail from "./get.article.detail.js";
import getArticleList from "./get.article.list.js";
import getArticleComment from "./get.article.comments.js";
import updateArticle from "./update.article.js";
import updateArticleComment from "./update.article.comment.js";
import deleteArticle from "./delete.article.js";
import deleteArticleComment from "./delete.article.comment.js";
//# sourceMappingURL=index.d.ts.map