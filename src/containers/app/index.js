/**
 *
 * App
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FormattedMessage {...messages.App} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
