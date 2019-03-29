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
			user: data.user,
			password: data.password,
			email: data.email,
			firstName: data.firstName,
			lastName: data.lastName
		})
		.then(res => {
			if (res.data.status === 'success') {			
				dispatch(signUpSuccess(res.data.message));
			} else {
				dispatch(signUpFail(res.data.message));
			}
		})
		.catch(err => {
			dispatch(signUpFail(err.message));
		})
	}
}

export function resetSignUp() {
	return { type: RESET_SIGNUP };
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
			identifier: data.identifier,
			password: data.password
		})
		.then(res => {
			if (res.data.status === 'success') {
				dispatch(loginSuccess(res.data.user));
			} else {
				dispatch(loginFail(res.data.message));
			}
		})
		.catch(err => {
			dispatch(loginFail(err.message));
		})
	}
}