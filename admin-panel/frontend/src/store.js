import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createBrowserHistory } from 'history';

import createRootReducer from './components/reducers/rootReducer';
import { saveState } from './components/util/localStorage';

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);


export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		composedEnhancers
	);
	store.subscribe(throttle(() => {
	saveState({
		userObject: store.getState().userObject
	});
	}, 1000));

	return store;
}
