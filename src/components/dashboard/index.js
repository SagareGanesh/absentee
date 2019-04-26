/**
 *
 * Dashboard
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        Hello world!
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default Dashboard;
