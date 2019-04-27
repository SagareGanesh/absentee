import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';


const FormError = props => (
  <Alert color="danger">
    { props.globalError }
  </Alert>
);

FormError.propTypes = {
  globalError: PropTypes.string.isRequired,
};

export default FormError;
