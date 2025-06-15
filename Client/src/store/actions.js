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
}