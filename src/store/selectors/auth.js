const baseAuthSelector = (store) => store.auth;
export const isLoggedInSelector = (store) => baseAuthSelector(store).isLoggedIn;
export const authErrorsSelector = (store) => baseAuthSelector(store).errors;
export const accessTokenSelector = (store) => baseAuthSelector(store).access_token;
