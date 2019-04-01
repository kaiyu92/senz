import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField, TextAreaField } from 'react-semantic-redux-form';

import {
  Button,
  Form,
  Header,
  Message,
  Segment,
  Modal
} from "semantic-ui-react";

const validate = values => {
	const errors = {};
	const requiredFields = ['deviceName'];

	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = 'Required'
		}
	});
	return errors;
}

class AddDeviceForm extends Component {

	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	submitForm(val) {
		this.props.addNewDevice(val, this.props.selectedProject._id, this.props.projects);
		this.closeModal();
		this.props.reset();
	}

	openModal = () => {
		this.props.showAddDeviceModal();
	}

	closeModal = () => {
		this.props.hideAddDeviceModal();
	}

	render() {
		const { handleSubmit, projectError,
			showModalState } = this.props;

		return (
			<div>
				<Modal onClose={this.closeModal} open={showModalState} trigger={<Button basic color='blue' onClick={this.openModal}>Add Device</Button>} closeIcon>
					<Header icon='sitemap' content='New Device' />
					<Modal.Content>
						<Form onSubmit={ handleSubmit((values) => {
							this.submitForm(values)
						})}>
							<Segment stacked>
								<Field
									component={InputField}
									fluid
									placeholder="Device Name"
									name="deviceName"
								/>
								<Button color="blue" fluid size="large">
				                  Add Device
				                </Button>
							</Segment>
						</Form>
			            {
			            	projectError.length > 0 ?
			            	<Message
			        			error
			        			header="There was some error adding the device"
			        			content={ projectError }
			        		/>: <div></div>
			            }
		            </Modal.Content>
	            </Modal>
			</div>
		);
	}
}

export default reduxForm({
	form: 'AddDeviceForm',
	validate
})(AddDeviceForm);