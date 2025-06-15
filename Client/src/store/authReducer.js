import {
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    SET_USERNAME_SUCCESS,
    SET_USERNAME_FAILURE,
    SET_PASSWORD_SUCCESS,
    SET_PASSWORD_FAILURE,
    SET_EMAIL_SUCCESS,
    SET_EMAIL_FAILURE,
} from './actionTypes.js';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        case SET_USERNAME_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload,
                },
                error: null,
            };
        case SET_USERNAME_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case SET_PASSWORD_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.payload,
                },
                error: null,
            };
        case SET_PASSWORD_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case SET_EMAIL_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload,
                },
                error: null,
            };
        case SET_EMAIL_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};