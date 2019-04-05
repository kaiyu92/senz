import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavbarDisplay extends Component {

	constructor(props) {
		super(props);

		this.dashboardAction = this.dashboardAction.bind(this);
		this.logoutAction = this.logoutAction.bind(this);
	}

	logoutAction(e) {
		e.preventDefault();
		this.props.attemptLogout();
	}

	dashboardAction(e) {
		e.preventDefault();
		this.props.resetSelectedProjectState();
	}

	render() {
		return(
			<Menu borderless inverted fluid fixed="top" color="blue">
			    <Menu.Menu>
			      <Menu.Item>
			        Senz Admin Panel
			      </Menu.Item>
			    </Menu.Menu>
			    <Menu.Menu position="right">
			      <Menu.Item>
			        <Link to="/dashboard" onClick={this.dashboardAction}>Dashboard</Link>
			      </Menu.Item>
			      <Menu.Item>
			        Settings
			      </Menu.Item>
			      <Menu.Item>
			        Help
			      </Menu.Item>
			      <Menu.Item>
			        <Link to="/" onClick={this.logoutAction}>Sign out</Link>
			      </Menu.Item>
			    </Menu.Menu>
		  	</Menu>
		);
	}
}


export default NavbarDisplay;

