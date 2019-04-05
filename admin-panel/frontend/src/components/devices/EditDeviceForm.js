import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from 'react-semantic-redux-form';
import { connect } from 'react-redux';

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

class EditDeviceForm extends Component {

	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}

	submitForm(val) {
		this.props.editDevice(val,this.props.selectedDevice._id, this.props.selectedProject._id, this.props.projects);
		this.closeModal();
		this.props.reset();
	}

	closeModal = () => {
		this.props.hideEditDeviceModal();
	}

	render() {
		const { handleSubmit, projectError,
			showModalState } = this.props;

		return (
				<Modal onClose={this.closeModal} open={showModalState} closeIcon>
					<Header icon='sitemap' content='Edit Existing Device' />
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
				                  Edit Device
				                </Button>
							</Segment>
						</Form>
			            {
			            	projectError.length > 0 ?
			            	<Message
			        			error
			        			header="There was some error editing the device"
			        			content={ projectError }
			        		/>: <div></div>
			            }
		            </Modal.Content>
	            </Modal>
		);
	}
}
EditDeviceForm = reduxForm({
	form: 'EditDeviceForm',
	validate,
	enableReinitialize: true
})(EditDeviceForm);

EditDeviceForm = connect(
	state => ({
		initialValues: {
			deviceName: state.project.selectedDevice.deviceName,
		}
	}),
)(EditDeviceForm)

export default EditDeviceForm