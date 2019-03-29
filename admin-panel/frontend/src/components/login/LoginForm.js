import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from 'react-semantic-redux-form';
import { Link, Redirect } from "react-router-dom";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const divStyle = {
  position: 'absolute',
  left: '50%',
  top: '45%',
  transform: 'translate(-50%, -50%)',
  width: '450px',
};

const validate = values => {
	const errors = {};
	const requiredFields = ['identifier', 'password'];

	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = 'Required'
		}
	});
	return errors;
}

class LoginForm extends Component {

	submitForm(val) {
		this.props.attemptLogin(val);
	}

	render() {
		const { handleSubmit, loginError, isLoggedIn } = this.props;

		if (isLoggedIn) {
			return <Redirect to="/dashboard"/>
		}

		return (
	     	<div style={divStyle}>
		        <Grid textAlign="center" verticalAlign="middle">
		          <Grid.Column style={{ maxWidth: 450 }}>
		            <Header as="h2" color="blue" textAlign="center">
		              Log-in to your account
		            </Header>
		            <Form size="large" onSubmit={handleSubmit((values) => {
		            	this.submitForm(values)
		            })}>
		              <Segment stacked>
		               	<Field
			            	component={InputField}
			            	fluid
			            	icon="user"
			            	iconPosition="left"
			            	placeholder="Username"
			            	name="identifier"
		            	/>
			            <Field
			            	component={InputField}
			            	fluid
			            	icon="lock"
			            	iconPosition="left"
			            	placeholder="Password"
			            	type="password"
			            	name="password"
			            />
		                <Button color="blue" fluid size="large">
		                  Login
		                </Button>
		              </Segment>
		            </Form>
		            {
		            	loginError.length > 0 ?
		            	<Message
                			error
                			header="There was some error with your attempt to login"
                			content={ loginError }
                		/>: <div></div>
		            }
		            <Message>
		              New to us? <Link to="/registration">Sign Up</Link>
		            </Message>
		          </Grid.Column>
		        </Grid>
			</div>			
		);
	}
}

export default reduxForm({
	form: "LoginForm",
	validate
})(LoginForm);