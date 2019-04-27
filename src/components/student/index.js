import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Spinner from '../shared/spinner.js';
import { Button, Card, CardHeader, CardBody, Form, FormGroup, Input, Label,
         FormFeedback, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DataTable from '../shared/dataTable';

import styles from './styles';

const linkFormatter = (cell, row, methods) => (
  <Button color="primary" data-toggle="tooltip" title="Edit" className="fa fa-edit" size="sm"></Button>
);

const columns = [
{
  dataField: 'roll_number',
  text: 'Roll No',
},
{
  dataField: 'name',
  text: 'Name',
},
{
  dataField: 'class_name',
  text: 'Class'
},
{
  dataField: 'division',
  text: 'Division',
},
{
  dataField: 'notification_nos',
  text: 'Mobile No',
},
{
  dataField: 'action',
  text: 'Action',
  formatter: linkFormatter,
}
];

const relativePos = { 'position': 'relative'};
const absolutePos = { 'position': 'absolute', 'right': '0' };

class StudentComponent extends Component {
  render () {
    const { props } = this;
    return(
      <div className="animated fadeIn mt-3">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>Students
            <div className="card-header-actions">
              <Link to="/students/new" style={{ textDecoration: 'none' }}>
                <Button block color="primary" size="sm">
                  <b>+ New</b>
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardBody>
          <div>
          <Form inline className="mb-2" style={relativePos}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="class_name" className="mr-sm-2">Class:</Label>
              <Input type="select"
                     name="selectedClass"
                     id="selectedClass"
                     placeholder="Select Class"
                     onChange={ this.props.handleOnChange }
                     value={ this.props.selectedClass }
                     size="md">
                {
                  props.classNames.map((op) => {
                    return <option value={op}> {op} </option>
                  })
                }
              </Input>
            </FormGroup>
            <Button type="button" onClick={ this.props.search } color="primary" size="sm" className="mr-1">Search</Button>
          </Form>
        </div>
            <div>
              <DataTable columns={columns} keyField="id"
                         data={props.studentData}
                         sizePerPage={props.sizePerPage}
                         totalSize={props.totalSize}
                         handlePagination={props.handlePagination}
                         onSearch={props.onSearch}
                         search={props.search}
                         page={props.page}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

StudentComponent.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default StudentComponent;
