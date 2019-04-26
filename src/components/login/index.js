/**
 *
 * Login
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { AppFooter } from '@coreui/react';
import messages from './messages';
import background from '../../assets/images/5.jpg';
import logo from '../../assets/images/logo.png';
import Footer from '../footer';
import styles from './styles';

class LoginComponent extends Component {
  render() {
    return (
      <>
        <div className="app flex-row align-items-center">
          <Row style={styles.absolute}>
            <img style={styles.image} src={background} alt="background" />
          </Row>
          <Container>
            <Row className="justify-content-center">
              <Col md="5">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form>
                        <Row>
                          <Col sm={6} style={styles.marginAuto}>
                            <h1>
                              <FormattedMessage {...messages.Login} />
                            </h1>
                          </Col>
                          <Col sm={6} align="right">
                            <img width="70px" height="70px" src={logo} alt="logo" />
                          </Col>
                        </Row>
                        <p className="text-muted">
                          <FormattedMessage {...messages.SigninAccount} />
                        </p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Username" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="current-password" />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button onClick={this.props.login} color="primary" className="px-4">
                              <FormattedMessage {...messages.Login} />
                            </Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">
                              <FormattedMessage {...messages.ForgotPassword} />
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
        <AppFooter>
          <Footer />
        </AppFooter>
      </>
    );
  }
}

LoginComponent.propTypes = {
  login : PropTypes.func.isRequired,
}

export default LoginComponent;
