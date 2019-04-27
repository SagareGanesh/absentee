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

const Student = Loadable({
  loader: () => import('./containers/student/index.js'),
  loading: Loading
});

const StudentNew = Loadable({
  loader: () => import('./containers/studentNew/index.js'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Student', component: Student, details: 'Student' },
  { path: '/attendance', exact: true, name: 'Attendance', component: Attendance, details: 'Attendance' },
  { path: '/students', exact: true, name: 'Student', component: Student, details: 'Student' },
  { path: '/students/new', name: "New Student", component: StudentNew, details: 'New Student' },
]

export default routes;
