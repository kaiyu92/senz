import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router'

import user from './userReducer'; 
import project from './projectReducer';

export default (history) => combineReducers({
	user,
	project,
	//Add routerReducer
	router: connectRouter(history),

	//Add formReducer
	form: formReducer
});