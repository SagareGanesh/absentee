import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/images/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 50, height: 50, alt: 'CoreUI Logo' }}
          minimized={{ src: logo, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <div className="school-name">
          {this.props.school.name}
        </div>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
            <div className='avatar-circle'>
              <div className='initials avatar-text'>U</div>
            </div>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center">
                <strong><FormattedMessage {...messages.Setting} /></strong>
              </DropdownItem>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <DropdownItem ><i className="fa fa-lock"></i>
                  <FormattedMessage {...messages.Logout} />
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
