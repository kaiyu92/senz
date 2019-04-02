import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField, TextAreaField } from 'react-semantic-redux-form';
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
	const requiredFields = ['proj_title', 'proj_desc',
							'sharedKey'];

	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = 'Required'
		}
	});
	return errors;
}

class EditProjectForm extends Component {

	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	submitForm(val) {
		this.props.editProject(val, this.props.selectedProject._id, this.props.projects);
		this.closeModal();
		this.props.reset();
	}

	openModal = () => {
		this.props.showEditProjectModal();
	}

	closeModal = () => {
		this.props.hideEditProjectModal();
	}

	render() {
		const { handleSubmit, projectError,
			showModalState } = this.props;

		return (
				<Modal onClose={this.closeModal} open={showModalState} trigger={<Button basic color='blue' onClick={this.openModal} icon='edit'></Button>} closeIcon>
					<Header icon='sitemap' content='Edit Existing Project' />
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
				                  Edit Project
				                </Button>
							</Segment>
						</Form>
			            {
			            	projectError.length > 0 ?
			            	<Message
			        			error
			        			header="There was some error editing the project"
			        			content={ projectError }
			        		/>: <div></div>
			            }
		            </Modal.Content>
	            </Modal>
		);
	}
}
EditProjectForm = reduxForm({
	form: 'EditProjectForm',
	validate
})(EditProjectForm);

EditProjectForm = connect(
	state => ({
		initialValues: {
			proj_title: state.project.selectedProject.title,
			proj_desc: state.project.selectedProject.desc,
			sharedKey: state.project.selectedProject.sharedKey
		}
	})
)(EditProjectForm)

export default EditProjectForm