import { ROOT_URL } from '../util/backend';
import axios from 'axios';

//action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const RESET_SIGNUP = 'RESET_SIGNUP';

// Register Attempt
export function signUpSuccess(msg) {
	return { type: SIGNUP_SUCCESS, payload: msg };
}

export function signUpFail(error) {
	return { type: SIGNUP_FAIL, payload: error };
}

export function attemptRegister(data) {
	return dispatch => {
		axios.post(ROOT_URL + 'register', {
			data
		})
		.then(res => {
			if (res.body.status === 'success') {
				dispatch(signUpSuccess(res.body.message));
			} else {
				dispatch(signUpFail(res.body.message));
			}
		})
		.catch(err => {
			dispatch(signUpFail(err.message));
		})
	}
}

//Login Attempt
export function loginSuccess(userObject) {
	return { type: LOGIN_SUCCESS, payload: userObject};
}

export function loginFail(error) {
	return { type:LOGIN_FAIL, payload: error};
}

export function attemptLogin(data) {
	return dispatch => {
		axios.post(ROOT_URL + 'login', {
			data
		})
		.then(res => {
			if (res.body.status === 'success') {
				dispatch(loginSuccess(res.body.user));
			} else {
				dispatch(loginFail(res.body.message));
			}
		})
		.catch(err => {
			dispatch(loginFail(err.message));
		})
	}
}