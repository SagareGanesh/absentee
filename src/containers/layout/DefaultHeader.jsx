import React from 'react';
import { AppSidebarToggler, AppNavbarBrand } from '@coreui/react';
import DefaultHeaderDropdown from './DefaultHeaderDropdown';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { DomainUrl } from '../../utils/domain';
import logo from '../../assets/images/logo.png';

const DefaultHeader = (props) => {
  return(
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <a>
          <AppNavbarBrand
              full={{
                src: logo, width: 50, height: 40, alt: 'DDE Logo'
              }}
              minimized={{
                src: logo, width: 20, height: 40, alt: 'DDE Logo'
              }}
          />
        </a>
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="ml-auto" navbar>
        {/*<DefaultHeaderDropdown accnt logOut={props.logOut}/>*/}
      </Nav>
    </React.Fragment>
  );
}

export default DefaultHeader;
