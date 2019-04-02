import React, { Component } from "react";
import { Table, Button } from 'semantic-ui-react';
import EditDevice from './EditDevice';

class DeviceListDisplay extends Component {

	constructor(props) {
		super(props);
		this.openEditDeviceModal = this.openEditDeviceModal.bind(this);
	}

  	componentDidUpdate() {
	   const { isProjectEditUpdating } = this.props;
	   if (isProjectEditUpdating) {
	    this.props.resetProjectEditState();
	   }
	}

	openEditDeviceModal = (e) => {
		e.preventDefault();
		this.props.selectSpecficDevice(this.props.selectedProject, e.currentTarget.value);
		this.props.showEditDeviceModal();
	}

	 deleteDevice = (e) => {
	 	e.preventDefault();
	   const { selectedProject, projects } = this.props;
	   this.props.removeDevice(e.currentTarget.value, selectedProject._id, projects);
	}

	render() {
		const { selectedProject } = this.props;
		const self = this;
		var count = 1;
	
		if (selectedProject.devices.length === 0) {
			return <p>No device is added yet</p>
		}

		return (
			<Table celled textAlign='center'>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>#</Table.HeaderCell>
						<Table.HeaderCell>Device Name</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
				{
					selectedProject.devices.map(function(device) {
						return <Table.Row key={device._id}>
							<Table.Cell>{count++}</Table.Cell>
							<Table.Cell>{device.deviceName}</Table.Cell>
							<Table.Cell>
								<Button basic color='blue' icon='edit' value={device._id} onClick={self.openEditDeviceModal}/><EditDevice/>
								<Button basic color='blue' icon='trash' value={device._id} onClick={self.deleteDevice}/>
							</Table.Cell>
						</Table.Row>
					})
				}
				</Table.Body>
			</Table>
		);
	}
}

export default DeviceListDisplay;

