export const selectIsLoggedIn = state => state.session.isLoggedIn;

export const selectUser = state => state.session.user;

export const selectUserName = state => state.session.user.name;
