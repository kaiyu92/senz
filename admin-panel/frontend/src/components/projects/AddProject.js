import { connect } from "react-redux";
import { addNewProject, showAddProjectModal, hideAddProjectModal } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import AddProjectForm from "./AddProjectForm";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		user: state.user.userObject.username,
		projectError: state.project.error,
		showModalState: state.project.showAddProjectModal
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		addNewProject(data, user, projects) {
			dispatch(addNewProject(data, user, projects));
		},
		showAddProjectModal: () => dispatch(showAddProjectModal()),
		hideAddProjectModal: () => dispatch(hideAddProjectModal())
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm);