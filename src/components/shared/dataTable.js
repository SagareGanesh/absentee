import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, Input, Row, Col,
} from 'reactstrap';
import CustomPagination from './pagination';
import './dataTable.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const TableRow = ({ row, columns, methods }) => {
  const tableData = columns.map((column) => {
    if(column.hide){return null;}
    if (column.formatter) {
      return (
        <td key={column.dataField}>
          {' '}
          { column.formatter(row[column.dataField], row, methods) }
          {' '}
        </td>
      );
    }
    return (
      <td key={column.dataField}>
        {' '}
        { row[column.dataField] }
        {' '}
      </td>
    );
  });

  return (
    <tr>
      { tableData }
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
};

const DataTable = (props) => {
  const pagination = (
    <nav>
      <CustomPagination
        totalPages={props.totalSize}
        currentPage={props.page}
        handlePagination={props.handlePagination}
      />
    </nav>
  );

  const tableHeader = props.columns.map(column => {
    if(column.hide) { return null; }
    return(
      <th key={column.dataField} width={column.width}>{column.text}</th>
    )
  });

  const tableRows = props.data.map(row => (
    <TableRow row={row} columns={props.columns} key={row[props.keyField]} methods={props.methods || {}} />
  ));

  return (
    <div>
      <Row xs="12" md="12" className="search-bar text-right">
        <Col className="float-right">
          { props.withSearch === false ? (
            <div />
          ) : (
            <Input
              type="text"
              name="search"
              placeholder="Search...."
              className="search"
              onChange={props.onSearch}
              value={props.search}
            />
          )

          }
        </Col>
      </Row>
      <Table hover bordered striped responsive size="sm">
        <thead>
          <tr>
            { tableHeader }
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
      { props.totalSize > 0 ? pagination : null }
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  handlePagination: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  sizePerPage: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
  onSearch: PropTypes.func,
  search: PropTypes.string,
  columns: PropTypes.array.isRequired,
  keyField: PropTypes.string.isRequired,
};

export default DataTable;
