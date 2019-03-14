import React, { Component } from "react";

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

class Login extends Component {
	render() {
		return (
	     	<div style={divStyle}>
		        <Grid textAlign="center" verticalAlign="middle">
		          <Grid.Column style={{ maxWidth: 450 }}>
		            <Header as="h2" color="blue" textAlign="center">
		              Log-in to your account
		            </Header>
		            <Form size="large">
		              <Segment stacked>
		                <Form.Input
		                  fluid
		                  icon="user"
		                  iconPosition="left"
		                  placeholder="Username"
		                />
		                <Form.Input
		                  fluid
		                  icon="lock"
		                  iconPosition="left"
		                  placeholder="Password"
		                  type="password"
		                />
		                <Button color="blue" fluid size="large">
		                  Login
		                </Button>
		              </Segment>
		            </Form>
		            <Message>
		              New to us? <a href="#root">Sign Up</a>
		            </Message>
		          </Grid.Column>
		        </Grid>
			</div>			
		);
	}
}

export default Login;