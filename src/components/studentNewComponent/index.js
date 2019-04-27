/**
 *
 * StudentNewComponent
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {  Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardHeader, CardGroup, Container, Button } from 'reactstrap';
import messages from './messages';

import styles from './styles';

class StudentNewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      roll_number: '',
      class_name: '',
      division: '',
      academic_year: '',
      notification_nos: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  onSaveClick = () => {
    this.props.onSaveClick(this.state);
  }

  render() {
    return (
      <Container className="p-4">
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card>
                <CardHeader>
                  Add New Student
                </CardHeader>
                <CardBody>
                  <Form>
                  <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Name:</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control-warning"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Roll No.:</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    name="roll_number"
                    placeholder="Roll Number"
                    className="form-control-warning"
                    onChange={this.handleChange}
                    value={this.state.roll_number}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Academic Year:</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  name="academic_year"
                  placeholder="Academic Year"
                  className="form-control-warning"
                  onChange={this.handleChange}
                  value={this.state.academic_year}
                />
              </Col>
              </FormGroup>
              <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Mobile Number:</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  name="notification_nos"
                  placeholder="Notification number"
                  className="form-control-warning"
                  onChange={this.handleChange}
                  value={this.state.notification_nos}
                />
              </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Class Name:</Label>
                </Col>
                <Col xs="12" md="9">
                <Input type="select"
                       name="selectedClass"
                       id="selectedClass"
                       placeholder="Select Class"
                       onChange={(event) => this.handleChange(event)}
                       value={ this.props.class_name }
                       size="md">
                  {/*
                    classNames.map((op) => {
                      return <option value={op}> {op} </option>
                    })
                  */}
                </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Division:</Label>
                </Col>
                <Col xs="12" md="9">
                <Input type="select"
                       name="division"
                       id="selectedClass"
                       placeholder="division"
                       onChange={(event) => this.handleChange(event)}
                       value={ this.props.division }
                       size="md">
                  {/*
                    props.classNames.map((op) => {
                      return <option value={op}> {op} </option>
                    })
                  */}
                </Input>
                </Col>
              </FormGroup>
                <FormGroup row>
                  <Col offset="6">
                    <Button type="button" className="mr-1" color="primary" onClick={this.onSaveClick}>Save</Button>
                    <Link to="/students" className="new-supplier">
                      <Button type="button" color="danger">Cancel</Button>
                    </Link>
                  </Col>
                </FormGroup>
                </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

StudentNewComponent.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default StudentNewComponent;
