import React from "react";
import { Menu, Divider } from 'semantic-ui-react';

const SideNavbar = () => (
    <Menu vertical borderless fluid text align="left">
      <Menu.Item as="a">
        Overview
      </Menu.Item>
      <Menu.Item as="a">Reports</Menu.Item>
      <Menu.Item as="a">Analytics</Menu.Item>
      <Menu.Item as="a">Export</Menu.Item>
      <Divider hidden />
      <Menu.Item as="a">Nav item</Menu.Item>
      <Menu.Item as="a">Nav item again</Menu.Item>
      <Menu.Item as="a">One more nav</Menu.Item>
      <Menu.Item as="a">Another nav item</Menu.Item>
      <Menu.Item as="a">More navigation</Menu.Item>
      <Divider hidden />
      <Menu.Item as="a">Macintoch</Menu.Item>
      <Menu.Item as="a">Linux</Menu.Item>
      <Menu.Item as="a">Windows</Menu.Item>
	</Menu>
);

export default SideNavbar;