/**
 *
 * Student
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAttendance, submitAttendance } from '../../actions/attendance';
import AttendanceComponent from '../../components/attendanceComponent';
import { FormattedMessage } from 'react-intl';
import { Label, Input, FormGroup, Col, Card, CardBody, CardHeader } from 'reactstrap';
import Spinner from '../../components/shared/spinner';
import messages from './messages';

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: null,
    }
  }

  componentDidMount() {
    this.props.fetchAttendance();
  }

  submitAttendance = (data) => {
    this.props.submitAttendance({
      "school_id": data.schoolId,
      "student_ids": data.absentStudents,
      "class_name": data.standard,
      "division": data.division
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    const { data, loading } = this.props.attendance;
    const { result } = this.props;
    return (
      <div className="pt-3">
        { loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <Card>
              <CardHeader><FormattedMessage {...messages.Filters} /></CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="2">
                    <Label> <FormattedMessage {...messages.Class} /> </Label>
                  </Col>
                  <Col xs="12" md="10">
                  <Input type="select"
                         name="selectedClass"
                         id="selectedClass"
                         placeholder="Select Class"
                         onChange={(event) => this.handleChange(event)}
                         value={ this.props.class_name }
                         size="md">
                         <option value=''> select </option>
                         {
                           result.data.class_names.map((op) => {
                             return <option value={op}> {op} </option>
                           })
                         }
                  </Input>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
            { Object.keys(data.students).map((standard, index) => (
                <React.Fragment>
                  { (!this.state.selectedClass || standard === this.state.selectedClass) ? (
                    <div>
                    { Object.keys(data.students[standard]).map((division, index) => (
                      <AttendanceComponent
                        standard={standard}
                        division={division}
                        list={data.students[standard][division]}
                        status={data.attendance[standard][division]}
                        submitAttendance={this.submitAttendance}
                      />
                    ))}
                    </div>
                  ) : (
                    <div />
                  )}
                </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </div>
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
  result: state.studentReducer,
})

const mapDispatchToProps = dispatch => ({
  fetchAttendance: () => dispatch(fetchAttendance()),
  submitAttendance: (data) => dispatch(submitAttendance(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
