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
import GlobalStyle from "./styles/global.style";

export default () => (
  <div>
    <GlobalStyle />
    <AppHeader />

    <SettingsContainer>
      <Container>
        <Grid>
          <Grid.Column width={11}>
            <Segment>
              <Header as="h2">General settings</Header>
              <p>
                By letting us know your name, we can make your experience more
                personal.
              </p>
              <Form>
                <Grid>
                  <Grid.Row className="no-padding-bottom">
                    <Grid.Column width={12}>
                      <Form.Field inline>
                        <label>First and last name</label>
                        <Input placeholder="First name" />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row verticalAlign="middle">
                    <Grid.Column width={12}>
                      <Form.Field inline>
                        <label>Email</label>
                        <Input placeholder="First name" />
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
                        <Input placeholder="First name" />
                      </Form.Field>
                      <Form.Field inline>
                        <label>New password</label>
                        <Input placeholder="First name" />
                      </Form.Field>
                      <Form.Field inline>
                        <label>Confirm password</label>
                        <Input placeholder="First name" />
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
                We do our best to give you a great experience - we'll be sad to
                see you leave us.
              </p>
              <a>Delete account</a>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <Header as="h2">Userpic</Header>
              <Grid>
                <Grid.Column width={12}>
                  <Image
                    src="/static/images/Ben_man-512.png"
                    className="user-image-normal"
                  />
                  <div className="userpic-actions">
                    <a>
                      <Icon name="pencil alternate" />
                      Change userpic
                    </a>
                    <a>
                      <Icon name="trash alternate" />
                      Remove
                    </a>
                  </div>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Image
                    src="/static/images/Ben_man-512.png"
                    className="user-image-small"
                  />
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
