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
	const requiredFields = ['proj_title', 'proj_desc',
							'sharedKey'];

	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = 'Required'
		}
	});
	return errors;
}

class AddProjectForm extends Component {

	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	submitForm(val) {
		this.props.addNewProject(val, this.props.user, this.props.projects);
		this.closeModal();
		this.props.reset();
	}

	openModal = () => {
		this.props.showAddProjectModal();
	}

	closeModal = () => {
		this.props.hideAddProjectModal();
	}

	render() {
		const { handleSubmit, projectError,
			showModalState } = this.props;

		return (
			<div>
				<Modal onClose={this.closeModal} open={showModalState} trigger={<Button basic color='blue' onClick={this.openModal}>Add Project</Button>} closeIcon>
					<Header icon='sitemap' content='New Project' />
					<Modal.Content>
						<Form onSubmit={ handleSubmit((values) => {
							this.submitForm(values)
						})}>
							<Segment stacked>
								<Field
									component={InputField}
									fluid
									placeholder="Title"
									name="proj_title"
								/>
								<Field
									component={TextAreaField}
									fluid="true"
									placeholder="Description"
									name="proj_desc"
								/>
								<Field
									component={InputField}
									fluid
									placeholder="Shared Key"
									name="sharedKey"
								/>
								<Button color="blue" fluid size="large">
				                  Create New Project
				                </Button>
							</Segment>
						</Form>
			            {
			            	projectError.length > 0 ?
			            	<Message
			        			error
			        			header="There was some error creating a new project"
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
	form: 'AddProjectForm',
	validate
})(AddProjectForm);