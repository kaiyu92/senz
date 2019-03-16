import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import NavBar from "./Navbar";
import SideNavbar from "./SideNavbar";
import './styles.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <Grid padded className="tablet computer only">
        	<NavBar />
        </Grid>
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
          	<SideNavbar />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h1" align="left">
                  Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row>
              {this.props.children}
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
	</div>
	);
	}
}

export default Layout;