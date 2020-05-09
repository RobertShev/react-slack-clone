import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../sass/components/_header.scss';
import { Container, Row, Col } from 'reactstrap';
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
  DropdownItem,
  Button,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navbar light expand="md">
              <NavbarBrand tag={RRNavLink} exact to="/">
                <img src="images/main-logo.svg" alt="Smiley face"></img>
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Why Slack?</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem>Option 3</DropdownItem>
                      <DropdownItem>Option 4</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Solutions</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem>Option 3</DropdownItem>
                      <DropdownItem>Option 4</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Resources</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem>Option 3</DropdownItem>
                      <DropdownItem>Option 4</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/enterpise">
                      Enterprise
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/pricing">
                      Pricing
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavLink tag={RRNavLink} to="/Login">
                  Sign In
                </NavLink>
                <Button color="primary" tag={RRNavLink} to="/Registration">
                  primary
                </Button>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <DropdownItem divider />
    </div>
  );
}

export default Header;
