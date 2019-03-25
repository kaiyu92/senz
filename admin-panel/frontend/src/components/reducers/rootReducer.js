import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router'

import user from './userReducer'; 

export default (history) => combineReducers({
	user,
	//Add routerReducer
	router: connectRouter(history),

	//Add formReducer
	form: formReducer
});