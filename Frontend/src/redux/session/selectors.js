export const selectIsAuth = state => state.session.isAuth;

export const selectUser = state => state.session.user;

export const selectUserName = state => state.session.user.name;

export const selectIsRefreshing = state => state.session.isRefreshing;

export const selectUserDetails = state => state.session.userDetails;
