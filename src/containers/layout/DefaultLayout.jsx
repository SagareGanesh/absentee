import React from 'react';
import { AppFooter, AppHeader, AppSidebar, AppSidebarFooter, AppSidebarHeader,
         AppSidebarMinimizer, AppSidebarNav, AppSidebarForm} from '@coreui/react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import routes from '../../routes.js';
import navigation from '../../_nav';
import DefaultHeader from './DefaultHeader.jsx';
import Footer from '../footer/index.js';

// import path from '../../apis/path.js';
// import CustomBreadcrumb from '../../components/shared/breadcrumbs';

class DefaultLayout extends React.Component {
  render() {
    console.log("In default lay", this.props);
    return(
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Switch>
                {
                  routes.map((route, index) => ( route.component ? (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={
                        props => (<route.component {...props} />)
                      }
                    />
                  ) : (null)))
                }
              </Switch>
            </Container>
          </main>
        </div>
        <Footer/>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  {
  }
)(DefaultLayout);
