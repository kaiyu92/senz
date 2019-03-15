import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class routes extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</Router>
		);
	}
}

export default routes;