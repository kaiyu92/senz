import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class ProjectListDisplay extends Component {
	
	constructor(props) {
		super(props);
				
		this.navigateProgramatically = this.navigateProgramatically.bind(this);
	}

	componentDidMount() {
		//Fetch all the projects that is associated to this user
		const { user } = this.props;
		this.props.fetchingUserProject(user);
	}

	navigateProgramatically(e) {
		e.preventDefault();
		const targetID = e.target.getAttribute("href");
		this.props.selectSpecficProject(this.props.projects, targetID.substring(1));
	}

	componentDidUpdate() {
		const { isProjectListUpdating } = this.props;
		if (isProjectListUpdating) {
			this.props.resetProjectListState();
		}
	}

	render() {
		const { projects } = this.props;
		const self = this;
	
		if (projects.length === 0) {
			return <Menu.Item>No project is created yet</Menu.Item>
		}

		return (
			<div>
				{
					projects.map(function(project) {
						return <Menu.Item key={project._id}>
							<Link to={project._id}
									onClick={self.navigateProgramatically}
									replace>
									{ project.title }
							</Link>
						</Menu.Item>
					})
				}
			</div>
		);
	}
}

export default ProjectListDisplay;

