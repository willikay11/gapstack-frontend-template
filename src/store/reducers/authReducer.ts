import { PURGE } from 'redux-persist';
import { IS_USER_SIGNING_IN, USER_SIGN_IN_SUCCESS, USER_LOGGED_OUT, USER_SIGN_IN_FAILURE } from '../types/auth';

const initialState = {
    isSigningIn: false,
    user: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_USER_SIGNING_IN:
            return {
                isSigningIn: true,
            };
        case USER_SIGN_IN_SUCCESS:
            return {
                isSigningIn: false,
                user: action.data,
            };
        case USER_LOGGED_OUT:
            return {
                isSigningIn: false,
                user: null,
            };
        case USER_SIGN_IN_FAILURE:
            return {
                isSigningIn: false,
            };
        case PURGE:
            return {};
        default:
            return state;
    }
};
