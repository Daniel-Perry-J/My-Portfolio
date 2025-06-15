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
    SET_EMAIL_FAILURE
} from './actionTypes.js';

import { setLogoutTimer } from './timer.js';
import { HOST } from '../config.js';

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: LOGOUT });
        clearTimeout(setLogoutTimer);
        return Promise.resolve();
    };
};

export const login = (email, username, password) => async (dispatch) => {
    try {
        const response = await fetch(`${HOST}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch({ type: LOGIN_SUCCESS, payload: { user: data.user, token: data.token } });
        setLogoutTimer(data.expiresIn);
        return Promise.resolve();
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
};

export const register = (email, username, password) => async (dispatch) => {
    try {
        const response = await fetch(`${HOST}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch({ type: REGISTER_SUCCESS, payload: { user: data.user, token: data.token } });
        setLogoutTimer(data.expiresIn);
        return Promise.resolve();
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
};

export const setUsername = (username) => async (dispatch) => {
    try {
        const response = await fetch(`${HOST}/api/user/set-username`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ username }),
        });

        if (!response.ok) {
            throw new Error('Setting username failed');
        }

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch({ type: SET_USERNAME_SUCCESS, payload: data.user });
        return Promise.resolve();
    } catch (error) {
        dispatch({ type: SET_USERNAME_FAILURE, payload: error.message });
    }
}

export const setPassword = (password) => async (dispatch) => {
    try {
        const response = await fetch(`${HOST}/api/user/set-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ password }),
        });

        if (!response.ok) {
            throw new Error('Setting password failed');
        }

        dispatch({ type: SET_PASSWORD_SUCCESS });
        return Promise.resolve();
    } catch (error) {
        dispatch({ type: SET_PASSWORD_FAILURE, payload: error.message });
    }
};

export const setEmail = (email) => async (dispatch) => {
    try {
        const response = await fetch(`${HOST}/api/user/set-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Setting email failed');
        }

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch({ type: SET_EMAIL_SUCCESS, payload: data.user });
        return Promise.resolve();
    } catch (error) {
        dispatch({ type: SET_EMAIL_FAILURE, payload: error.message });
    }
};

export const checkAuth = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {
            dispatch({ type: LOGIN_SUCCESS, payload: { user: JSON.parse(user), token } });
            setLogoutTimer(JSON.parse(user).expiresIn);
        } else {
            dispatch({ type: LOGOUT });
        }
    };
};

export const clearError = (errorType) => {
    return (dispatch) => {
        switch (errorType) {
            case 'login':
                dispatch({ type: LOGIN_FAILURE, payload: null });
                break;
            case 'register':
                dispatch({ type: REGISTER_FAILURE, payload: null });
                break;
            case 'setUsername':
                dispatch({ type: SET_USERNAME_FAILURE, payload: null });
                break;
            case 'setPassword':
                dispatch({ type: SET_PASSWORD_FAILURE, payload: null });
                break;
            case 'setEmail':
                dispatch({ type: SET_EMAIL_FAILURE, payload: null });
                break;
            default:
                break;
        }
    };
};