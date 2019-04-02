import { connect } from "react-redux";
import { hideEditDeviceModal, editDevice } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import EditDeviceForm from "./EditDeviceForm";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		selectedProject: state.project.selectedProject,
		selectedDevice: state.project.selectedDevice,
		projectError: state.project.error,
		showModalState: state.project.showEditDeviceModal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		editDevice(data, selectedDevice_id,  selectedProject_id, projects) {
			dispatch(editDevice(data, selectedDevice_id,  selectedProject_id, projects));
		},
		hideEditDeviceModal: () => dispatch(hideEditDeviceModal()),
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceForm);