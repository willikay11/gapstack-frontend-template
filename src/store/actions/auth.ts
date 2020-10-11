import { IS_USER_SIGNING_IN, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAILURE, USER_LOGGED_OUT } from '../types/auth';

const isUserSigningIn = () => ({
    type: IS_USER_SIGNING_IN,
});

const onUserSignInSuccess = (data: any) => ({
    type: USER_SIGN_IN_SUCCESS,
    data,
});

const onUserSignInFailure = () => ({
    type: USER_SIGN_IN_FAILURE,
});

const onUserLogout = () => ({
    type: USER_LOGGED_OUT,
});

const userSignIn = (data: any) => {
    return (dispatch: any) => {
        dispatch(isUserSigningIn());
        dispatch(onUserSignInSuccess(data));
        dispatch(onUserSignInFailure());
        // network request
    };
};

const userLogout = () => {
    return (dispatch: any) => {
        return dispatch(onUserLogout());
    };
};

export const actions = {
    userSignIn,
    userLogout,
};
