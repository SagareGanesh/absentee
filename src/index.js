import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import './index.css';
import configureStore from './store';


/**************************
* Render setup
*************************/
const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <Provider store={configureStore()}>
    <h1>Hello!!</h1>
 </Provider>,
 MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
