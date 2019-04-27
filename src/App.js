import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Login from './containers/login/index.js';
import DefaultLayout from './containers/DefaultLayout';
import './App.scss';
import styles from './styles';

import { IntlProvider, addLocaleData } from "react-intl";
import enMessages from "./i18n/locales/en.json";
import mrMessages from "./i18n/locales/mr.json";
import enLocaleData from "react-intl/locale-data/en";
import mrLocaleData from "react-intl/locale-data/mr";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

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
      <HashRouter>
        <IntlProvider locale={locale} messages={localeMessages[locale]}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact={true} path="/" name="Login" component={ Login } />
              <Route path="*" name="Home" render={props => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </IntlProvider>
      </HashRouter>
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
