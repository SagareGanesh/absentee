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
    // const data = [{
    //   class: '9th',
    //   div: 'A',
    //   data: [{
    //     id: 1,
    //     name: 'AAAAA',
    //   },{
    //     id: 2,
    //     name: 'BBBBB',
    //   },{
    //     id: 3,
    //     name: 'CCCC',
    //   }]
    // }];
    const { absentStudents } = this.state;
    const { data } = this.props.studentReduecer;
    return (
      <Card>
        <CardBody>
          { Object.keys(data).map((standard, index) => (
            <React.Fragment>
              { Object.keys(data[standard]).map((division, index) => (
                <React.Fragment>
                  <Row>
                    <Col sm={9}>
                      <span className="pr-2">Class: <b>{standard}</b></span>
                      <span>Division: <b>{division}</b></span>
                    </Col>
                    <Col sm={3} align="right">
                      <Button size="sm" color="success">Submit Attendance</Button>
                    </Col>
                  </Row>
                  <hr />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </CardBody>
      </Card>
    );
  }
}

Attendance.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  fetchAttendance: () => dispatch(fetchAttendance()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
