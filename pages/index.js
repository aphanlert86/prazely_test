import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Input,
  Image,
  Icon
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import { SettingsContainer } from "./styles/index.style";
import { changeImageUrl } from "../store";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      file: null,
      imagePreviewUrl: "/static/images/Ben_man-512.png"
    };
  }

  openFileReader = () => {
    this.refs.fileUploader.click();
  };

  handleImageChange = e => {
    e.preventDefault();
    const { changeImageUrl } = this.props;

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState(
        {
          file: file,
          imagePreviewUrl: reader.result
        },
        () => {
          changeImageUrl(this.state.imagePreviewUrl);
        }
      );
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { userImageUrl } = this.props;

    return (
      <div>
        <AppHeader />

        <SettingsContainer>
          <Container>
            <Grid>
              <Grid.Column width={11}>
                <Segment>
                  <Header as="h2">General settings</Header>
                  <p>
                    By letting us know your name, we can make your experience
                    more personal.
                  </p>
                  <Form>
                    <Grid>
                      <Grid.Row className="no-padding-bottom">
                        <Grid.Column width={12}>
                          <Form.Field inline>
                            <label>First and last name</label>
                            <Input placeholder="Abhiisith Phanlert" />
                          </Form.Field>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row verticalAlign="middle">
                        <Grid.Column width={12}>
                          <Form.Field inline>
                            <label>Email</label>
                            <Input
                              placeholder="aphanlert86@gmail.com"
                              type="email"
                            />
                          </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <a>Change email</a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Form>
                </Segment>
                <Segment>
                  <Header as="h2">Change password</Header>
                  <Form>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={12}>
                          <Form.Field inline>
                            <label>Current password</label>
                            <Input type="password" />
                          </Form.Field>
                          <Form.Field inline>
                            <label>New password</label>
                            <Input type="password" className="secondary" />
                          </Form.Field>
                          <Form.Field inline>
                            <label>Confirm password</label>
                            <Input type="password" className="secondary" />
                          </Form.Field>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Button color="red">Update password</Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Form>
                </Segment>
                <Segment>
                  <p>
                    We do our best to give you a great experience - we'll be sad
                    to see you leave us.
                  </p>
                  <a className="action-disabled">Delete account</a>
                </Segment>
              </Grid.Column>
              <Grid.Column width={5}>
                <Segment>
                  <Header as="h2">Userpic</Header>
                  <Grid>
                    <Grid.Column width={12}>
                      <Image src={userImageUrl} className="user-image-normal" />
                      <input
                        type="file"
                        id="file"
                        ref="fileUploader"
                        style={{ display: "none" }}
                        onChange={this.handleImageChange}
                        accept="image/*"
                      />
                      <div className="userpic-actions">
                        <a onClick={this.openFileReader}>
                          <Icon name="pencil alternate" />
                          Change userpic
                        </a>
                        <a className="action-disabled">
                          <Icon name="trash alternate" />
                          Remove
                        </a>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Image src={userImageUrl} className="user-image-small" />
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </SettingsContainer>

        <AppFooter />
      </div>
    );
  }
}

Index.propTypes = {
  userImageUrl: PropTypes.string.isRequired,
  changeImageUrl: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userImageUrl: state.userImageUrl
});

const mapDispatchToProps = dispatch => ({
  changeImageUrl: imageUrl => dispatch(changeImageUrl(imageUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
