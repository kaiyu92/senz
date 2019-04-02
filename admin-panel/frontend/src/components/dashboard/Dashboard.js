import { connect } from "react-redux";
import { resetProjectEditState, removeProject } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import DashboardDisplay from "./DashboardDisplay";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		selectedProject: state.project.selectedProject,
		isProjectEditUpdating: state.project.isProjectEditUpdating
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		removeProject(selectedProject_id, projects) {
			dispatch(removeProject(selectedProject_id, projects));
		},
		resetProjectEditState: () => dispatch(resetProjectEditState()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardDisplay);