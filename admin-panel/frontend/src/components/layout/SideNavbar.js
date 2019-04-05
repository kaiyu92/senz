import React from "react";
import { Menu, Divider } from 'semantic-ui-react';
import AddProject from '../projects/AddProject';
import ProjectList from '../projects/ProjectList';

const SideNavbar = () => (
    <Menu vertical borderless fluid text align="center">
      <Menu.Item header>
        Projects
      </Menu.Item>
      <ProjectList/>
      <Menu.Item><AddProject/></Menu.Item>
      <Divider hidden />
	</Menu>
);

export default SideNavbar;