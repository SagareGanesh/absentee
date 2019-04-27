import React from 'react';
import { CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import DropdownTemplate from '../dropdownTemplate';

const FormHeader = props => (
  <CardHeader>
    <strong>{props.text}</strong>
    { props.dropdownItems && <DropdownTemplate dropdownItems={props.dropdownItems} /> }
  </CardHeader>
);

FormHeader.propTypes = {
  text: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array,
};

FormHeader.defaultProps = {
  dropdownItems: null,
};

export default FormHeader;
