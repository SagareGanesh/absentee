import React from 'react';
import Loadable from 'react-loadable';
import DefaultLayout from './containers/DefaultLayout';

function Loading(){
  return <div>Loading</div>;
}

const Dashboard = Loadable({
  loader: () => import('./containers/dashboard/index.js'),
  loading: Loading
});

const Attendance = Loadable({
  loader: () => import('./containers/attendance/index.js'),
  loading: Loading
});

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard, details: 'Dashboard' },
  { path: '/attendance', exact: true, name: 'Attendance', component: Attendance, details: 'Attendance' }
]

export default routes;
