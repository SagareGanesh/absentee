/**
 *
 * Footer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class Footer extends Component {
  render() {
    return (
      <Row>
      <React.Fragment>
        <span><a href="https://coreui.io">CoreUI</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
    </React.Fragment>
    </Row>
    );
  }
}

Footer.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

export default Footer;
