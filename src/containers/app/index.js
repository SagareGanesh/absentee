import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Login from '../login/index.js';
import DefaultLayout from '../layout/DefaultLayout.jsx';

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
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" name="Login" component={ Login } />
            <Route exact={true} path="*" name="*" component={ DefaultLayout } />
          </Switch>
        </HashRouter>
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
