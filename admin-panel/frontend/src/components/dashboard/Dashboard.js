import { connect } from "react-redux";
import { resetProjectEditState } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import DashboardDisplay from "./DashboardDisplay";

const mapStateToProps = (state) => {
	return {
		selectedProject: state.project.selectedProject,
		isProjectEditUpdating: state.project.isProjectEditUpdating
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		resetProjectEditState: () => dispatch(resetProjectEditState()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardDisplay);