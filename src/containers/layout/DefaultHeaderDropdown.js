// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
//
// const propTypes = {
//   accnt: PropTypes.bool,
// };
//
// const defaultProps = {
//   accnt: false,
// };
//
// class DefaultHeaderDropdown extends Component {
//   constructor(props) {
//     super(props);
//
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false,
//       apiErrors: [],
//     };
//   }
//
//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen,
//     });
//   }
//
//   dropAccnt() {
//     return (
//       <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <DropdownToggle nav>
//           <p data-letters={currentUser.name_abbr|| 'U'}></p>
//         </DropdownToggle>
//         <DropdownMenu right>
//           <DropdownItem header tag="div" className="text-center">
//             <strong>{ currentUser.name }</strong>
//             <br />
//             { currentUser.role_name }
//           </DropdownItem>
//           <DropdownItem onClick={this.props.logOut}>
//             <i className="fa fa-lock" />
//             {' '}
// Logout
//           </DropdownItem>
//         </DropdownMenu>
//       </Dropdown>
//     );
//   }
//
//   render() {
//     const { accnt } = this.props;
//     return (
//       accnt ? this.dropAccnt() : null
//     );
//   }
// }
//
//
//
// DefaultHeaderDropdown.propTypes = propTypes;
// DefaultHeaderDropdown.defaultProps = defaultProps;
//
// export default DefaultHeaderDropdown;
