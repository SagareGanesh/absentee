import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomBreadcrumb = (props) => {
  const breadcrumbItems = props.breadcrumbs.map((breadcrumb) => {
    if (breadcrumb.active) {
      return (
        <BreadcrumbItem active key={breadcrumb.name}>
          {breadcrumb.name}
        </BreadcrumbItem>
      );
    }
    return (
      <BreadcrumbItem key={breadcrumb.name}>
        <Link to={breadcrumb.path}>
          {breadcrumb.name}
        </Link>
      </BreadcrumbItem>
    );
  });

  return (
    breadcrumbItems.length
      ? (
        <Breadcrumb>
          { breadcrumbItems }
        </Breadcrumb>
      )
      : null
  );
};

CustomBreadcrumb.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default CustomBreadcrumb;
