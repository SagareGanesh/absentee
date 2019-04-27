import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/language';
import { getSchoolDetails } from '../../actions/school';
import { ToastContainer, toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  componentDidMount(){
    this.props.getSchoolDetails()
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  setLanguage = (event) => {
    debugger
    this.props.setLanguage(event.target.value);
  }

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)} school={this.props.school}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter fixed>
          <DefaultFooter locale={this.props.locale}
                          setLanguage={this.setLanguage}/>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.languageReducer.locale,
  school: state.schoolReducer.school
})

const mapDispatchToProps = dispatch => ({
  setLanguage: (locale) => dispatch(setLanguage(locale)),
  getSchoolDetails: () => dispatch(getSchoolDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
