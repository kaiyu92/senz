import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './components/reducers/rootReducer';
import { saveState } from './components/util/localStorage';

export const history = createHistory();

const initialState = {}
const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const createStore(
	connectRouter(history)(rootReducer),
	initialState,
	composedEnhancers
);

store.subscribe(throttle(() => {
saveState({
	// userObject: store.getState().userObject
});
}, 1000));

export default store;