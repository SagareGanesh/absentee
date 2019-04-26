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

import { IntlProvider, addLocaleData } from "react-intl";
import enMessages from "../../i18n/locales/en.json";
import mrMessages from "../../i18n/locales/mr.json";
import enLocaleData from "react-intl/locale-data/en";
import mrLocaleData from "react-intl/locale-data/mr";

addLocaleData(enLocaleData);
addLocaleData(mrLocaleData);

const localeMessages = {
  'en': enMessages,
  'mr': mrMessages,
};

class App extends Component {
  render() {
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={localeMessages[locale]}>
        <React.Fragment>
          <FormattedMessage {...messages.App} />
        </React.Fragment>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  locale : PropTypes.string,
}

const mapStateToProps = state => ({
 locale: state.languageReducer.locale,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
