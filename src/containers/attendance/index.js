/**
 *
 * Student
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAttendance } from '../../actions/attendance';

import { FormattedMessage } from 'react-intl';
import { Card, CardBody, Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import messages from './messages';

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state= {
      absentStudents: [],
    }
  }

  componentDidMount() {
    this.props.fetchAttendance();
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
    const { absentStudents } = this.state;
    const { data } = this.props.attendance;
    return (
      <React.Fragment>
        { Object.keys(data).map((standard, index) => (
            <React.Fragment>
              { Object.keys(data[standard]).map((division, index) => (
                <Card>
                <CardBody>
                  <React.Fragment>
                    <Row>
                      <Col sm={9}>
                        <span className="pr-2">Class: <b>{standard}</b></span>
                        <span>Division: <b>{division}</b></span>
                      </Col>
                      <Col sm={3} align="right">
                        <Button size="sm" color="primary">Submit Attendance</Button>
                      </Col>
                    </Row>
                    <hr />
                    <Row className="ml-0">
                     { data[standard][division].map((student,index) => (
                       <React.Fragment>
                         <UncontrolledTooltip placement="top" target={"student" + student.id }>
                           {student.name}
                         </UncontrolledTooltip>
                         <Button onClick={() => this.setAbsent(student.id)} id={ "student" + student.id}
                           color={absentStudents.includes(student.id) ? "danger" : "success"} className="student mr-3" key={index}>
                           <div>{student.roll_number}</div>
                         </Button>
                       </React.Fragment>
                     ))}
                   </Row>
                  </React.Fragment>
                </CardBody>
                </Card>
              ))}
            </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

Attendance.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
  attendance: state.attendanceReduecr,
})

const mapDispatchToProps = dispatch => ({
  fetchAttendance: () => dispatch(fetchAttendance()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
