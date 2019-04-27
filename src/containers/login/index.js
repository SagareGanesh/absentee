/**
 *
 * Login
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginComponent from '../../components/login/index.js';
import Footer from '../footer';

class Login extends Component {
  login = () => {
    this.props.history.push('/students');
  }

  render() {
    return (
      <React.Fragment>
        <LoginComponent login={this.login} />
        <Footer />
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
