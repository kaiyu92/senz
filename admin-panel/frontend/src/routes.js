import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from "./store";
import { loadState } from './components/util/localStorage';
import PrivateRoute from './components/util/PrivateRoute';

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/registration/Register";

const persistedState = loadState();

const store = configureStore(persistedState);

//Dashboard routes
const DashboardRoutes = () => (
	<Switch>
		<Route exact path='/dashboard' component={Dashboard} />
	</Switch>
)

class routes extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/registration" component={Register} />
						<PrivateRoute path="/dashboard" component={DashboardRoutes} />
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default routes;