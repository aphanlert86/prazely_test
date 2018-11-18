import React, { Component } from "react";
import { Grid, Container, Image, Divider, Header } from "semantic-ui-react";

import HeaderContainer from "./index.style";

class AppHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <Container>
          <Grid verticalAlign="middle">
            <Grid.Column floated="left" width={4}>
              <Header as="h1">Account settings</Header>
            </Grid.Column>
            <Grid.Column floated="right" width={4}>
              <Image
                src="/static/images/Ben_man-512.png"
                className="user_image"
              />
            </Grid.Column>
          </Grid>
          <Divider />
        </Container>
      </HeaderContainer>
    );
  }
}

export default AppHeader;
