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

const Student = Loadable({
  loader: () => import('./containers/student/index.js'),
  loading: Loading
});

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard, details: 'Dashboard' },
  { path: '/students', exact: true, name: 'Student', component: Student, details: 'Student' }
]

export default routes;
