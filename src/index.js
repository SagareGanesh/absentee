import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import mrLocaleData from "react-intl/locale-data/mr";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@coreui/coreui/dist/js/coreui.min.js';
import enMessages from "./i18n/locales/en.json";
import mrMessages from "./i18n/locales/mr.json";

import App from './containers/app';
import './index.scss';
import configureStore from './store';

addLocaleData(enLocaleData);
addLocaleData(mrLocaleData);

const messages = {
  'en': enMessages,
  'mr': mrMessages,
};
/**************************
* Render setup
*************************/
const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <IntlProvider locale="en" messages={messages["en"]}>
    <Provider store={configureStore()}>
      <App />
   </Provider>
 </IntlProvider>,
 MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
