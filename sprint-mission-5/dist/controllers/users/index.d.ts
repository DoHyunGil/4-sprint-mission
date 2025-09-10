export default userAPI;
declare namespace userAPI {
    export { createUser };
    export { loginUser };
    export { logoutUser };
    export { getUserProfile };
    export { updateUserProfile };
    export { updateUserChangePassword };
    export { userTokenRefresh };
}
import createUser from "./post.user.register.js";
import loginUser from "./post.user.login.js";
import logoutUser from "./post.user.logout.js";
import getUserProfile from "./get.user.profile.js";
import updateUserProfile from "./update.user.profile.js";
import updateUserChangePassword from "./update.user.change.password.js";
import userTokenRefresh from "./get.user.token.refresh.js";
//# sourceMappingURL=index.d.ts.map