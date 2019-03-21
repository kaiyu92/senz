import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from "./store";
import { loadState } from './components/util/localStorage';

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

const persistedState = loadState();

const store = configureStore(persistedState);

class routes extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/dashboard" component={Dashboard} />
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default routes;