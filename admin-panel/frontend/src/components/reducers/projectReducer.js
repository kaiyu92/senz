import { FETCH_PROJECT_SUCCESS, 
		FETCH_PROJECT_FAILURE,
		ADD_PROJECT_FAIL,
		EDIT_PROJECT_FAIL,
		SHOW_ADD_PROJECT_MODAL,
		HIDE_ADD_PROJECT_MODAL,
		SHOW_EDIT_PROJECT_MODAL,
		HIDE_EDIT_PROJECT_MODAL,
		SELECT_SPECIFIC_PROJECT,
		RESET_SELECTED_PROJECT_STATE,
		ADD_PROJECT_STATE_UPDATE,
		EDIT_PROJECT_STATE_UPDATE,
		RESET_PROJECT_LIST_STATE,
		RESET_PROJECT_EDIT_STATE,
		SHOW_ADD_DEVICE_MODAL,
		HIDE_ADD_DEVICE_MODAL } from '../actions/projectActions';

const initialState = {
	projects:[],
	error: {},
	isUpdated: false,
	selectedProject: {},
	showAddProjectModal: false,
	showEditProjectModal: false,
	isProjectListUpdating: false,
	isProjectEditUpdating: false,
	showAddDeviceModal: false
};

const projectReducer = (state=initialState, action) => {
	switch(action.type) {
		case RESET_PROJECT_LIST_STATE:
			return Object.assign({}, state, {
				isProjectListUpdating: false
			});

		case RESET_PROJECT_EDIT_STATE:
			return Object.assign({}, state, {
				isProjectEditUpdating: false
			})

		case ADD_PROJECT_STATE_UPDATE: 
			return Object.assign({}, state, {
				projects: action.payload,
				isProjectListUpdating: true
			});

		case EDIT_PROJECT_STATE_UPDATE:
			return Object.assign({}, state, {
				projects: action.payload.projects,
				selectedProject: action.payload.selectedProject,
				isProjectEditUpdating: true,
				isProjectListUpdating: true
			});

		case FETCH_PROJECT_SUCCESS:
			return Object.assign({}, state, {
				projects: action.payload
			});

		case FETCH_PROJECT_FAILURE:
			return Object.assign({}, state, {
				error: action.payload
			});

		case ADD_PROJECT_FAIL:
			return Object.assign({}, state, {
				error: action.payload
			});

		case EDIT_PROJECT_FAIL:
			return Object.assign({}, state, {
				error: action.payload
			});

		case SHOW_ADD_PROJECT_MODAL:
			return Object.assign({}, state, {
				showAddProjectModal: true
			});

		case HIDE_ADD_PROJECT_MODAL:
			return Object.assign({}, state, {
				showAddProjectModal: false
			});

		case SHOW_EDIT_PROJECT_MODAL:
			return Object.assign({}, state, {
				showEditProjectModal: true
			});

		case HIDE_EDIT_PROJECT_MODAL:
			return Object.assign({}, state, {
				showEditProjectModal: false
			});

		case SELECT_SPECIFIC_PROJECT:
			return Object.assign({}, state, {
				selectedProject: action.payload
			});

		case RESET_SELECTED_PROJECT_STATE:
			return Object.assign({}, state, {
				selectedProject: {}
			});

		case SHOW_ADD_DEVICE_MODAL:
			return Object.assign({}, state, {
				showAddDeviceModal: true
			});

		case HIDE_ADD_DEVICE_MODAL:
			return Object.assign({}, state, {
				showAddDeviceModal: false
			});

		default:
			return state;
	}
}

export default projectReducer;