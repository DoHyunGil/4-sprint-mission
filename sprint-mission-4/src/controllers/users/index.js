import createUser from "./post.user.register.js";
import loginUser from "./post.user.login.js";
import logoutUser from "./post.user.logout.js";
import getUserProfile from "./get.user.profile.js";
import updateUserProfile from "./update.user.profile.js";
import updateUserChangePassword from "./update.user.change.password.js";

const userAPI = {
  createUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserChangePassword,
};

export default userAPI;
