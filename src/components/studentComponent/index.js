/**
 *
 * StudentComponent
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class StudentComponent extends Component {
  render() {
    return (
      <React.Fragment>
        Hello world!
      </React.Fragment>
    );
  }
}

StudentComponent.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default StudentComponent;
