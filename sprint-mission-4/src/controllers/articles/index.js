import createArticleComment from "./post.article.comment.create";
import createArticle from "./post.article.create";
import getArticleDetail from "./get.article.detail";
import getArticleList from "./get.article.list";
import getArticleComment from "./get.article.comments";
import updateArticle from "./update.article";
import updateArticleComment from "./update.article.comment";
import deleteArticle from "./delete.article";
import deleteArticleComment from "./delete.article.comment";

const articleApi = {
  createArticleComment,
  createArticle,
  getArticleDetail,
  getArticleList,
  getArticleComment,
  updateArticle,
  updateArticleComment,
  deleteArticle,
  deleteArticleComment,
};

export default articleApi;
