import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { faTimesCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

    
  }
  render() {
    
    return (
      <div className="container-fluid">
        <Navbar color="dark" dark expand="md">
         
        <NavbarBrand href="#home">
            EAT AROUND
        </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav navbar>
            <InputGroup size="sm" className="mt-1" >
                <Input placeholder="looking for ..."  />               
                
            </InputGroup>

            <InputGroup size="sm" className="mt-1">
                <Input placeholder="location" />
            </InputGroup >

            <Button color="primary" size="sm" className="mt-1" >
            <FontAwesomeIcon icon={faSearch}  />
            </Button>{' '}
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}