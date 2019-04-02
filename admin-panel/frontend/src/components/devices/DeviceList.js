import { connect } from "react-redux";
import { resetProjectEditState, showEditDeviceModal, selectSpecficDevice, removeDevice } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import DeviceListDisplay from "./DeviceListDisplay";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		selectedProject: state.project.selectedProject,
		isProjectEditUpdating: state.project.isProjectEditUpdating,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		selectSpecficDevice(selectedProject, selectedDevice_id) {
			dispatch(selectSpecficDevice(selectedProject, selectedDevice_id));
		},
		removeDevice(selectedDevice_id, selectedProject_id, projects) {
			dispatch(removeDevice(selectedDevice_id, selectedProject_id, projects));
		},
		resetProjectEditState: () => dispatch(resetProjectEditState()),
		showEditDeviceModal: () => dispatch(showEditDeviceModal())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceListDisplay);