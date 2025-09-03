import createUser from "./post.user.register.js";
import loginUser from "./post.user.login.js";
import logoutUser from "./post.user.logout.js";

const userAPI = {
  createUser,
  loginUser,
  logoutUser,
};

export default userAPI;
