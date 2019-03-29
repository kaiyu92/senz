import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from 'react-semantic-redux-form';
import { Link } from "react-router-dom";

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
	const requiredFields = ['user', 'password', 'email',
							'firstName', 'lastName'];

	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = 'Required'
		}
	});
	return errors;
}

class RegisterForm extends Component {

	submitForm(val) {
		const { reset } = this.props;
		this.props.attemptRegister(val);
		reset();
	}

	render() {

		const { successMsg, regError, handleSubmit } = this.props;
		return (
	     	<div style={divStyle}>
		        <Grid textAlign="center" verticalAlign="middle">
		          <Grid.Column style={{ maxWidth: 450 }}>
		            <Header as="h2" color="blue" textAlign="center">
		              Registration
		            </Header>
		            <Form size="large" onSubmit={ handleSubmit((values) => {
		            	this.submitForm(values)
		            })}>
		              <Segment stacked>
		              	<Field
		              		component={InputField}
		              		fluid
		              		name="firstName"
		              		placeholder="First Name"
		              	/>
		              	<Field
		              		component={InputField}
		              		fluid
		              		name="lastName"
		              		placeholder="Last Name"
		              	/>
		              	<Field
		              		component={InputField}
		              		fluid
		              		name="email"
		              		placeholder="Email"
		              		type="email"
		              	/>
		              	<Field
		              		component={InputField}
		              		fluid
		              		name="user"
		              		placeholder="Username"
		              	/>
		              	<Field
		              		component={InputField}
		              		fluid
		              		name="password"
		              		placeholder="Password"
		              		type="password"
		              	/>
		                <Button color="blue" fluid size="large">
		                  Sign Up
		                </Button>
		              </Segment>
		            </Form>
	                {
                		successMsg.length > 0 ?
                		<Message
                			success
                			header={ successMsg } 
                			content="You're all signed up for senz"
                		/> : regError.length > 0 ?
                		<Message
                			error
                			header="There was some error with your registration"
                			content={ regError }
                		/>: <div></div>
	                }
		            <Message>
		              Already an existing user? <Link to="/">Sign In</Link>
		            </Message>
		          </Grid.Column>
		        </Grid>
			</div>			
		);
	}
}

export default reduxForm({
	form: "RegisterForm",
	validate
})(RegisterForm);