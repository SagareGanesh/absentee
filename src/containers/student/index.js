/**
 *
 * Student
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStudents } from '../../actions/students';

import { FormattedMessage } from 'react-intl';
import { Card, CardBody, Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import messages from './messages';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state= {
      absentStudents: [],
    }
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  setAbsent = (id) => {
    let { absentStudents } = this.state;
    if(absentStudents.includes(id)) {
      absentStudents = absentStudents.filter((item) => item !== id)
    } else {
      absentStudents.push(id);
    }
    this.setState({
      absentStudents,
    })
  }

  render() {
    const data = [{
      class: '9th',
      div: 'A',
      data: [{
        id: 1,
        name: 'AAAAA',
      },{
        id: 2,
        name: 'BBBBB',
      },{
        id: 3,
        name: 'CCCC',
      }]
    }];
    const { absentStudents } = this.state;
    return (
      <Card>
        <CardBody>
          { data.map((item, index) => (
            <React.Fragment>
            <Row>
              <Col sm={9}>
                <span className="pr-2">Class: <b>{item.class}</b></span>
                <span>Division: <b>{item.div}</b></span>
              </Col>
              <Col sm={3} align="right">
                <Button size="sm" color="success">Submit Attendance</Button>
              </Col>
            </Row>
            <hr />
            <Row className="ml-0">
              { item.data.map((student,index) => (
                <React.Fragment>
                  <UncontrolledTooltip placement="top" target={"rollno" + index }>
                    {student.name}
                  </UncontrolledTooltip>
                  <Button onClick={() => this.setAbsent(student.id)} id={ "rollno" + index}
                    color={absentStudents.includes(student.id) ? "danger" : "success"} className="student mr-3" key={index}>
                    <div>{student.id}</div>
                  </Button>
                </React.Fragment>
              ))}
            </Row>
            <hr />
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    );
  }
}

Student.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Student);
