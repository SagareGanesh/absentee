/**
 *
 * Footer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from '../../components/footer';
import { setLanguage } from '../../actions/language';

class Footer extends Component {
  setLanguage = (event) => {
    this.props.setLanguage(event.target.value);
  }

  render() {
    return (
      <FooterComponent
         locale={this.props.locale}
         setLanguage={this.setLanguage}
       />
    );
  }
}

Footer.propTypes = {
  locale : PropTypes.string.isRequired,
  setLanguage : PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  locale: state.languageReducer.locale,
})

const mapDispatchToProps = dispatch => ({
  setLanguage: (locale) => dispatch(setLanguage(locale)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
