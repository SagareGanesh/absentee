import React from 'react';
import Loadable from 'react-loadable';
import DefaultLayout from './containers/layout/DefaultLayout';

function Loading(){
  return <div>Loading</div>;
}

const Dashboard = Loadable({
  loader: () => import('./containers/dashboard/index.js'),
  loading: Loading
});



const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard, details: 'Dashboard' }
]

export default routes;
