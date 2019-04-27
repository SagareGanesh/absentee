/**
 *
 * AttendanceComponent
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row, Button, UncontrolledTooltip } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class AttendanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state= {
      absentStudents: [],
    }
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
    const { standard, division, list, submitAttendance } = this.props;
    return (
      <Card>
        <CardBody>
          <React.Fragment>
            <Row>
              <Col sm={9}>
                <span className="pr-2">
                  <FormattedMessage {...messages.Class} />:
                  <b>{standard}</b>
                </span>
                <span>
                  <FormattedMessage {...messages.Division} /> :
                  <b>{division}</b>
                </span>
              </Col>
              <Col sm={3} align="right">
                <Button size="sm" onClick={() => submitAttendance({ standard, division, absentStudents, schoolId: list[0].school_id })} color="primary">
                   <FormattedMessage {...messages.SubmitAttendance} />
                </Button>
              </Col>
            </Row>
            <hr />
            <Row className="ml-0">
             { list.map((student,index) => (
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
    );
  }
}

AttendanceComponent.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default AttendanceComponent;
