import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

import PropTypes from 'prop-types';
import './pagination.css';

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
        onClick={props.handlePagination}
        disabled={(currentPage === 1)}
      >
                      First
      </PaginationLink>
    </PaginationItem>
  );

  const last = (
    <PaginationItem>
      <PaginationLink
        tag="button"
        value={totalPages}
        onClick={props.handlePagination}
        disabled={(currentPage === totalPages)}
      >
                      Last
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
        onClick={props.handlePagination}
        disabled={!(previousPage > 0)}
      />
    </PaginationItem>
  );

  let diff = currentPage - 1  

  const previousPages = []

  if(diff === 1) {
    previousPages.push((
      <PaginationItem >
        <PaginationLink
          tag="button"
          value={currentPage - 1}
          onClick={props.handlePagination}
        >
          { currentPage - 1 }
        </PaginationLink>
      </PaginationItem>
      )
    )
  } 
  else if(diff >= 2) {
    for (let i = (currentPage - 2); i < currentPage ; i += 1) {
      previousPages.push((
        <PaginationItem>
          <PaginationLink
            tag="button"
            value={i}
            onClick={props.handlePagination}
          >
            { i }
          </PaginationLink>
        </PaginationItem>
        )
      )
    }
  }

  const current = (
    <PaginationItem active>
      <PaginationLink
        tag="button"
        value={currentPage}
        onClick={props.handlePagination}
      >
        { currentPage}
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
        onClick={props.handlePagination}
        disabled={!(nextPage <= totalPages)}
      />
    </PaginationItem>
  );

  let lastDiff = totalPages - currentPage


  const nextPages = []

  if(lastDiff === 1) {
    nextPages.push((
      <PaginationItem >
        <PaginationLink
          tag="button"
          value={currentPage + 1}
          onClick={props.handlePagination}
        >
          { currentPage + 1 }
        </PaginationLink>
      </PaginationItem>
      )
    )
  } 
  else if(lastDiff >= 2) {
    for (let i = (currentPage + 1 ); i <= (currentPage + 2) ; i += 1) {
      nextPages.push((
        <PaginationItem>
          <PaginationLink
            tag="button"
            value={i}
            onClick={props.handlePagination}
          >
            { i }
          </PaginationLink>
        </PaginationItem>
        )
      )
    }
  }


  return (
    <>
      <div>
        Page { currentPage } of { totalPages }
      </div>
      <Pagination>
        { first }
        { previous }
        { previousPages }
        { current }
        { nextPages }
        { next }
        { last }
      </Pagination>
    </>
  );
}

CustomPagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
};

export default CustomPagination;
