import { connect } from "react-redux";
import { addNewDevice, showAddDeviceModal, hideAddDeviceModal } from "../actions/projectActions";
import { bindActionCreators } from 'redux';
import AddDeviceForm from "./AddDeviceForm";

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
		selectedProject: state.project.selectedProject,
		projectError: state.project.error,
		showModalState: state.project.showAddDeviceModal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		addNewDevice(data, selectedProject_id, projects) {
			dispatch(addNewDevice(data, selectedProject_id, projects));
		},
		showAddDeviceModal: () => dispatch(showAddDeviceModal()),
		hideAddDeviceModal: () => dispatch(hideAddDeviceModal())
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(AddDeviceForm);