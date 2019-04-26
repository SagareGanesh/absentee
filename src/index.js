import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@coreui/coreui/dist/js/coreui.min.js';

import App from './containers/app';
import './index.scss';
import configureStore from './store';

/**************************
* Render setup
*************************/
const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
 </Provider>,
 MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
