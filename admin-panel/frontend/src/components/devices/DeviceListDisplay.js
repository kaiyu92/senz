import React, { Component } from "react";
import { Table, Button } from 'semantic-ui-react';

class DeviceListDisplay extends Component {

  	componentDidUpdate() {
	   const { isProjectEditUpdating } = this.props;
	   if (isProjectEditUpdating) {
	    this.props.resetProjectEditState();
	   }
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
							<Table.Cell><Button basic color='blue' icon='edit'/><Button basic color='blue' icon='trash'/></Table.Cell>
						</Table.Row>
					})
				}
				</Table.Body>
			</Table>
		);
	}
}

export default DeviceListDisplay;

