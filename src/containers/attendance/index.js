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
import Spinner from '../../components/shared/spinner';
import messages from './messages';

class Attendance extends Component {
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

  render() {
    const { data, loading } = this.props.attendance;
    return (
      <div className="pt-3">
        { loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            { Object.keys(data).map((standard, index) => (
                <React.Fragment>
                  { Object.keys(data[standard]).map((division, index) => (
                    <AttendanceComponent
                      standard={standard}
                      division={division}
                      list={data[standard][division]}
                      submitAttendance={this.submitAttendance}
                    />
                  ))}
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
})

const mapDispatchToProps = dispatch => ({
  fetchAttendance: () => dispatch(fetchAttendance()),
  submitAttendance: (data) => dispatch(submitAttendance(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
