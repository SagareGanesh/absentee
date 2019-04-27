/**
 *
 * StudentNew
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentNewComponent from '../../components/studentNewComponent';
import { createStudent } from '../../actions/student';

class StudentNew extends Component {
  render() {
    return (
      <StudentNewComponent createStudent={this.props.createStudent}/>
    );
  }
}

StudentNew.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  createStudent: (data) => dispatch(createStudent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentNew);
