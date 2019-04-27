import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

import PropTypes from 'prop-types';
import './pagination.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const CustomPagination = (props) => {
  const ranges = [];
  const totalPages = parseInt(props.totalPages, 10);
  for (let i = 1; i <= totalPages; i += 1) {
    ranges.push(i);
  }

  const currentPage = parseInt(props.currentPage, 10);

  const first = (
    <PaginationItem>
      <PaginationLink
        tag="button"
        value={1}
        onClick={() => props.handlePagination(1)}
        disabled={(currentPage === 1)}
      >
        <FormattedMessage {...messages.First} />
      </PaginationLink>
    </PaginationItem>
  );

  const last = (
    <PaginationItem>
      <PaginationLink
        tag="button"
        value={totalPages}
        onClick={() => props.handlePagination(totalPages)}
        disabled={(currentPage === totalPages)}
      >
        <FormattedMessage {...messages.Last} />
      </PaginationLink>
    </PaginationItem>
  );

  const previousPage = currentPage - 1;


  const previous = (
    <PaginationItem>
      <PaginationLink
        tag="button"
        previous
        value={previousPage}
        onClick={() => props.handlePagination(previousPage)}
        disabled={!(previousPage > 0)}
      />
    </PaginationItem>
  );

  const current = (
    <PaginationItem active>
      <PaginationLink
        tag="button"
        value={currentPage}
        onClick={props.handlePagination}
        disabled={true}
      >
        { currentPage }
      </PaginationLink>
    </PaginationItem>
  );

  const nextPage = currentPage + 1;

  const next = (
    <PaginationItem>
      <PaginationLink
        tag="button"
        next
        value={nextPage}
        onClick={() => props.handlePagination(nextPage)}
        disabled={!(nextPage <= totalPages)}
      />
    </PaginationItem>
  );

  return (
    (totalPages) ?
      <Pagination>
        { first }
        { previous }
        { current }
        { next }
        { last }
      </Pagination>
    : null
  );
};

CustomPagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
};

export default CustomPagination;
