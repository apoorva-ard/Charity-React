import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBarC extends Component{
    
    constructor(props) {
		super(props);
        this.state = {
            isNavOpen: false,
            isDropdownOpen: false
        };
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}
    
    toggleNav(){
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    toggleDropdown(){
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    }

    render(){
    return (
        <Navbar expand="md" className="nav-style">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto logo-setting white-clr">CHARITY - ADMIN</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="ml-auto">
                        {
                            !this.props.auth && ( 
                            <NavItem>
                                <NavLink className="nav-link" to='/login'> Login</NavLink>
                            </NavItem>
                            )
                        }
                        {
                            this.props.auth && (
                            <React.Fragment>
                                <NavItem>
                                    <NavLink className="nav-link remove-dec white-clr" to='/messages'>Messages</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link remove-dec white-clr" to='/requests'>Pending Requests</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link remove-dec white-clr" to='/logout'>Logout</NavLink>
                                </NavItem>
                            </React.Fragment>
                            )
                        }
                        </Nav>
                    </Collapse>
            </div>
          </Navbar>
      );
    }
}

export default NavBarC;
