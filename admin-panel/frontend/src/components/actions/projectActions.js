import { ROOT_URL } from '../util/backend';
import axios from 'axios';

// Action Types
//==============Projects=====================
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';

export const ADD_PROJECT_FAIL = 'ADD_PROJECT_FAIL';

export const EDIT_PROJECT_FAIL = 'EDIT_PROJECT_FAIL';

export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';

export const SHOW_ADD_PROJECT_MODAL = 'SHOW_ADD_PROJECT_MODAL';
export const HIDE_ADD_PROJECT_MODAL = 'HIDE_ADD_PROJECT_MODAL';

export const SHOW_EDIT_PROJECT_MODAL = 'SHOW_EDIT_PROJECT_MODAL';
export const HIDE_EDIT_PROJECT_MODAL = 'HIDE_EDIT_PROJECT_MODAL';

export const SELECT_SPECIFIC_PROJECT = 'SELECT_SPECIFIC_PROJECT';
export const RESET_SELECTED_PROJECT_STATE = 'RESET_SELECTED_PROJECT_STATE';

export const ADD_PROJECT_STATE_UPDATE = 'ADD_PROJECT_STATE_UPDATE';
export const EDIT_PROJECT_STATE_UPDATE = 'EDIT_PROJECT_STATE_UPDATE'
export const DELETE_PROJECT_STATE_UPDATE = 'DELETE_PROJECT_STATE_UPDATE';

export const RESET_PROJECT_LIST_STATE = 'RESET_PROJECT_LIST_STATE';
export const RESET_PROJECT_EDIT_STATE = 'RESET_PROJECT_EDIT_STATE';
//===========================================

//==============Devices=====================
export const ADD_DEVICE_FAIL = 'ADD_DEVICE_FAIL';
export const EDIT_DEVICE_FAIL = 'EDIT_DEVICE_FAIL';
export const DELETE_DEVICE_FAIL = 'DELETE_DEVICE_FAIL';

export const SELECT_SPECIFIC_DEVICE = 'SELECT_SPECIFIC_DEVICE';

export const SHOW_ADD_DEVICE_MODAL = 'SHOW_ADD_DEVICE_MODAL';
export const HIDE_ADD_DEVICE_MODAL = 'HIDE_ADD_DEVICE_MODAL';

export const SHOW_EDIT_DEVICE_MODAL = 'SHOW_EDIT_DEVICE_MODAL';
export const HIDE_EDIT_DEVICE_MODAL = 'HIDE_EDIT_DEVICE_MODAL';

export const RESET_DEVICE_EDIT_STATE = 'RESET_DEVICE_EDIT_STATE';

//==========================================

export function resetProjectListState() {
	return { type: RESET_PROJECT_LIST_STATE }
}

export function resetProjectEditState() {
	return { type: RESET_PROJECT_EDIT_STATE }
}

/**
Option 1 -> Add project
Option 2 -> Edit project
Option 3 -> Delete project
**/
export function updateAllProjectsState(projects, project, actionType) {

	var i = 0;
	var selectedIndex = 0;
	switch (actionType) {
		case 1:
			projects.push(project);
			return { type: ADD_PROJECT_STATE_UPDATE, payload: projects }
		case 2:
			selectedIndex = 0;
			for (i = 0; i < projects.length; i++) {
				if (projects[i]._id === project._id) {
					selectedIndex = i;
					break;
				}
			}
			const newProjects = Object.assign([], projects, {[selectedIndex]: project});
			return { type: EDIT_PROJECT_STATE_UPDATE, payload: { projects: newProjects, selectedProject: project }}
		case 3:
			selectedIndex = 0;
			for (i = 0; i < projects.length; i++) {
				if (projects[i]._id === project._id) {
					selectedIndex = i;
					break;
				}
			}
			projects.splice(selectedIndex, 1);

			return { type: DELETE_PROJECT_STATE_UPDATE, payload: projects }
	}	
}

export function fetchingUserProject(username) {
	return dispatch => {
		axios.get(ROOT_URL + 'projects/' + username)
			.then(res => {
				dispatch(fetchProjectSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchProjectFailure(err.message));
			})
	}
}

export function fetchProjectSuccess(projects) {
	return { type: FETCH_PROJECT_SUCCESS, payload: projects }
}

export function fetchProjectFailure(error) {
	return { type: FETCH_PROJECT_FAILURE, payload: error }
}

export function addNewProject(data, user, projects) {
	return dispatch => {
		axios.post(ROOT_URL + 'addProject', {
			title: data.proj_title,
			desc: data.proj_desc,
			sharedKey: data.sharedKey,
			user: user,
		})
		.then(res => {
			if (res.data.status === 'success') {			
				dispatch(updateAllProjectsState(projects, res.data.newProject, 1));
			} else {
				dispatch(addProjectFailure(res.data.message));
			}
		})
		.catch(err => {
			dispatch(addProjectFailure(err.message));
		})
	}
}


export function addProjectFailure(error) {
	return { type: ADD_PROJECT_FAIL, payload: error }
}

export function editProject(data, selectedProject_id, projects) {
	return dispatch => {
		axios.put(ROOT_URL + 'updateProject/' + selectedProject_id, {
			title: data.proj_title,
			desc: data.proj_desc,
			sharedKey: data.sharedKey,
		})
		.then(res => {
			dispatch(updateAllProjectsState(projects, res.data, 2));
		})
		.catch(err => {
			dispatch(editProjectFailure(err.message));
		})
	}
}

export function editProjectFailure(error) {
	return { type: EDIT_PROJECT_FAIL, payload: error }
}

//ADD PROJECT MODAL
export function showAddProjectModal() {
	return { type: SHOW_ADD_PROJECT_MODAL }
}

export function hideAddProjectModal() {
	return { type: HIDE_ADD_PROJECT_MODAL }
}

//EDIT PROJECT MODAL
export function showEditProjectModal() {
	return { type: SHOW_EDIT_PROJECT_MODAL }
}

export function hideEditProjectModal() {
	return { type: HIDE_EDIT_PROJECT_MODAL }
}

export function removeProject(selectedProject_id, projects) {
	return dispatch => {
		axios.delete(ROOT_URL + 'removeProject/' + selectedProject_id)
		.then(res => {
			dispatch(updateAllProjectsState(projects, { _id: selectedProject_id }, 3));
		})
		.catch(err => {
			dispatch(removeProjectFailure(err.message));
		})
	}
}

export function removeProjectFailure(error) {
	return { type: DELETE_PROJECT_FAIL, payload: error }
}

export function selectSpecficProject(projects, project_id) {
	for (var i = 0; i < projects.length; i++) {
		if (projects[i]._id === project_id)
			return { type: SELECT_SPECIFIC_PROJECT, payload: projects[i] }
	}
}

export function resetSelectedProjectState() {
	return { type: RESET_SELECTED_PROJECT_STATE }
}

export function addNewDevice(data, selectedProject_id, projects) {
	return dispatch => {
		axios.put(ROOT_URL + 'addDevice/' + selectedProject_id, {
			deviceName: data.deviceName
		})
		.then(res => {
			dispatch(updateAllProjectsState(projects, res.data, 2));
		})
		.catch(err => {
			dispatch(editProjectFailure(err.message));
		})
	}
}

export function addDeviceFailure(error) {
	return { type: ADD_DEVICE_FAIL}
}

//ADD DEVICE MODAL
export function showAddDeviceModal() {
	return { type: SHOW_ADD_DEVICE_MODAL }
}

export function hideAddDeviceModal() {
	return { type: HIDE_ADD_DEVICE_MODAL }
}

export function editDevice(data, selectedDevice_id, selectedProject_id, projects) {
	return dispatch => {
		axios.put(ROOT_URL + 'editDevice/' + selectedProject_id + '/devices/' + selectedDevice_id, {
			deviceName: data.deviceName,
		})
		.then(res => {
			dispatch(updateAllProjectsState(projects, res.data, 2));
		})
		.catch(err => {
			dispatch(editDeviceFailure(err.message));
		})
	}
}

export function editDeviceFailure(error) {
	return { type: EDIT_DEVICE_FAIL, payload: error }
}

//EDIT DEVICE MODAL
export function showEditDeviceModal() {
	return { type: SHOW_EDIT_DEVICE_MODAL }
}

export function hideEditDeviceModal() {
	return { type: HIDE_EDIT_DEVICE_MODAL }
}

export function selectSpecficDevice(selectedProject, device_id) {
	var deviceArr = selectedProject.devices;
	for (var i = 0; i < deviceArr.length; i++) {
		if (deviceArr[i]._id === device_id)
			return { type: SELECT_SPECIFIC_DEVICE, payload: deviceArr[i] }
	}
}

export function removeDevice(selectedDevice_id, selectedProject_id, projects) {
	return dispatch => {
		axios.put(ROOT_URL + 'removeDevice/' + selectedProject_id + '/devices/' + selectedDevice_id)
		.then(res => {
			dispatch(updateAllProjectsState(projects, res.data, 2));
		})
		.catch(err => {
			dispatch(editDeviceFailure(err.message));
		})
	}
}

export function removeDeviceFailure(error) {
	return { type: DELETE_DEVICE_FAIL, payload: error }
}
