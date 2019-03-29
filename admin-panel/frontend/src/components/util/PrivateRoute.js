import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute =({ component: Component, authenticated, ...rest }) => (
	<Route {...rest} render={(props) => (
		authenticated ? <Component {...props} /> :
		<Redirect to={{
			pathname:'/',
			state: { from: props.location }
		}} />
	)} 
	/>
);

const { object, bool, func, string } = PropTypes;

const mapStateToProps = (state) => {
	return {
		authenticated: state.user.isLoggedIn
	};
};

PrivateRoute.propTypes = {
	component: func.isRequired,
	path: string.isRequired,
	authenticated: bool.isRequired,
	location: object
};

export default connect(mapStateToProps)(PrivateRoute);