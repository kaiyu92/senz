import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

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

const required = value => (value ? undefined : 'Required');

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
		              		component={Form.Input}
		              		fluid
		              		name="firstName"
		              		placeholder="First Name"
		              	/>
		              	<Field
		              		component={Form.Input}
		              		fluid
		              		name="lastName"
		              		placeholder="Last Name"
		              	/>
		              	<Field
		              		component={Form.Input}
		              		fluid
		              		name="email"
		              		placeholder="Email"
		              		type="email"
		              	/>
		              	<Field
		              		component={Form.Input}
		              		fluid
		              		name="user"
		              		placeholder="Username"
		              	/>
		              	<Field
		              		component={Form.Input}
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
		              Already an existing user? <a href="#root">Sign In</a>
		            </Message>
		          </Grid.Column>
		        </Grid>
			</div>			
		);
	}
}

export default reduxForm({
	form: "RegisterForm",
})(RegisterForm);