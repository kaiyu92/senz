import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";

class routes extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Login} />
				</div>
			</Router>
		);
	}
}

export default routes;