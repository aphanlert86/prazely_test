import React, { Component } from "react";
import { Grid, Container, Divider } from "semantic-ui-react";

import FooterContainer from "./index.style";

class AppFooter extends Component {
  render() {
    return (
      <FooterContainer>
        <Container>
          <Divider />
          <Grid verticalAlign="middle">
            <Grid.Column floated="right" width={4}>
              <div className="footer-links">
                <a>Privacy Policy</a>
                <a>Terms & Conditions</a>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </FooterContainer>
    );
  }
}

export default AppFooter;
