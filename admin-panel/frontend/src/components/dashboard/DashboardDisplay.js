import React, { Component } from "react";
import { Grid, Header, Button, Divider } from "semantic-ui-react";
import Layout from "../layout/Layout";
import EditProject from '../projects/EditProject';
import AddDevice from '../devices/AddDevice';
import DeviceList from '../devices/DeviceList';

class DashboardDisplay extends Component {

  componentDidUpdate() {
    const { isProjectEditUpdating } = this.props;
    if (isProjectEditUpdating) {
      this.props.resetProjectEditState();
    }
  }

  deleteProject = () => {
    const { selectedProject } = this.props;
    this.props.removeProject(selectedProject._id, this.props.projects);
  }

  render() {
    const { selectedProject } = this.props;

    if (Object.keys(selectedProject).length === 0) {
      return <div><Layout></Layout></div>;
    }
    return (
      <div>
        <Layout>
        	<Grid.Row>
        		<Grid.Column width={6}>
				  <Header as='h2' textAlign='left'>
				    Project Title
				    <Header.Subheader>{selectedProject.title}</Header.Subheader>
				  </Header>
        		</Grid.Column>
        		<Grid.Column width={6}>
				  <Header as='h2' textAlign='left'>
				    Shared Key
				    <Header.Subheader>{selectedProject.sharedKey}</Header.Subheader>
				  </Header>
        		</Grid.Column>
        	</Grid.Row>
        	<Grid.Row columns={1}>
        		<Grid.Column>
				  <Header as='h2' textAlign='left'>
				    Description
				    <Header.Subheader>{selectedProject.desc}</Header.Subheader>
				  </Header>
        		</Grid.Column>
        	</Grid.Row>
          <Grid.Row columns={1}>
            <EditProject/>
            <Button basic color='blue' icon='trash' onClick={this.deleteProject}/>
          </Grid.Row>
          <Divider section hidden />
          <Grid.Row>
            <Header dividing size="huge" as="h2" align="left">
              Devices
            </Header>
          </Grid.Row>
          <Grid.Row>
            <DeviceList/>
          </Grid.Row>
          <Grid.Row>
            <AddDevice/>
          </Grid.Row>
        </Layout>
      </div>
    );
  }
}

export default DashboardDisplay;