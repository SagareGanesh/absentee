
import React, { Component } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './dropdownTemplate.scss';
import PropTypes from 'prop-types';

class DropdownTemplate extends Component {
  state = {
    dropdownOpen: false,
  }

  toggle = () => {
    if (this.state.dropdownOpen) {
      this.setState({ dropdownOpen: false });
    } else {
      this.setState({ dropdownOpen: true });
    }
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          Actions
          {' '}
          <i className="fa fa-ellipsis-v" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Options</DropdownItem>
          {
              this.props.dropdownItems.map(item => (
                <DropdownItem key={item.text}>
                  <Link to={item.url}>
                    {item.text}
                  </Link>
                </DropdownItem>
              ))
            }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

DropdownTemplate.propTypes = {
  dropdownItems: PropTypes.array.isRequired,
};

export default DropdownTemplate;
