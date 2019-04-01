import { connect } from "react-redux";
import { showEditProjectModal, hideEditProjectModal, editProject } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import EditProjectForm from "./EditProjectForm";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		selectedProject: state.project.selectedProject,
		projectError: state.project.error,
		showModalState: state.project.showEditProjectModal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		editProject(data, selectedProject_id, projects) {
			dispatch(editProject(data, selectedProject_id, projects));
		},
		showEditProjectModal: () => dispatch(showEditProjectModal()),
		hideEditProjectModal: () => dispatch(hideEditProjectModal()),
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);