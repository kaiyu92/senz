import React from "react";
import { Menu } from 'semantic-ui-react';

const NavBar = () => (
  <Menu borderless inverted fluid fixed="top" color="blue">
    <Menu.Menu>
      <Menu.Item>
        Senz Admin Panel
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>
        Dashboard
      </Menu.Item>
      <Menu.Item>
        Settings
      </Menu.Item>
      <Menu.Item>
        Help
      </Menu.Item>
      <Menu.Item>
        Sign out
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);


export default NavBar;

