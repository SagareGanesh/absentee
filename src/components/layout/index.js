/**
 *
 * Layout
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class LayoutComponent extends Component {
  render() {
    return (
      <React.Fragment>
        Hello world!
      </React.Fragment>
    );
  }
}

LayoutComponent.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default LayoutComponent;
