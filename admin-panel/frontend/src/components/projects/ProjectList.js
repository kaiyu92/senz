import { connect } from "react-redux";
import { fetchingUserProject, selectSpecficProject, resetProjectListState } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import ProjectListDisplay from "./ProjectListDisplay";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		user: state.user.userObject.username,
		isProjectListUpdating: state.project.isProjectListUpdating,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		fetchingUserProject: (user) => {
			dispatch(fetchingUserProject(user));
		},
		selectSpecficProject: (projects, project_id) => dispatch(selectSpecficProject(projects, project_id)),
		resetProjectListState: () => dispatch(resetProjectListState())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListDisplay);