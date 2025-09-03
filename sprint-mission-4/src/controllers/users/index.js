import { createUser } from "./post.user.register.js";
import { loginUser, logoutUser } from "./post.user.login.js";

const userAPI = {
  createUser,
  loginUser,
  logoutUser,
};

export default userAPI;
