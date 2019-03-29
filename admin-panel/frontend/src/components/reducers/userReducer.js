import { 
	LOGIN_SUCCESS, 
	LOGIN_FAIL, 
	LOGOUT,
	SIGNUP_SUCCESS, 
	SIGNUP_FAIL,
	RESET_SIGNUP } from '../actions/userActions';

const initialState ={
	isLoggedIn: false,
	error: {},
	userObject: {
		username: '',
		name: ''
	},
	signupInfo: {
		msg: {},
		error: {}
	}
};

const userReducer = (state=initialState, action) => {
	switch (action.type) {
		case SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				signupInfo: {
					msg: action.payload,
					error: {}
				}
			});

		case SIGNUP_FAIL:
			return Object.assign({}, state, {
				signupInfo: {
					msg: {},
					error: action.payload
				}
			});

		case RESET_SIGNUP:
			return Object.assign({}, state, {
				signupInfo: {
					msg: {},
					error: {}
				}
			});

		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedIn: true,
				userObject: {
					username: action.payload.user,
					name: action.payload.firstName + action.payload.lastName
				}
			});

		case LOGIN_FAIL:
			return Object.assign({}, state, {
				error: action.payload
			});

		case LOGOUT:
			return Object.assign({}, state, {
				isLoggedIn: false,
				error: {},
				userObject: {
					username: '',
					name: ''
				}
			});

		default:
			return state;
	}
}

export default userReducer;

