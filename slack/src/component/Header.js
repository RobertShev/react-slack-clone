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
    <div className="sticky-top">
      <Container>
        <Row>
          <Col>
            <Navbar light expand="md">
              <NavbarBrand tag={RRNavLink} exact to="/">
                <img src="images/logo/main-logo.svg" alt="Slack Logo"></img>
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Why Slack?</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Features</DropdownItem>
                      <DropdownItem>How it replaces email</DropdownItem>
                      <DropdownItem>Security</DropdownItem>
                      <DropdownItem>Customers</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Solutions</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Remote Work</DropdownItem>
                      <DropdownItem>Distance Learning</DropdownItem>
                      <DropdownItem>Engineering</DropdownItem>
                      <DropdownItem>Financial Services</DropdownItem>
                      <DropdownItem>Sales</DropdownItem>
                      <DropdownItem>IT</DropdownItem>
                      <DropdownItem>Marketing</DropdownItem>
                      <DropdownItem>Customer Support</DropdownItem>
                      <DropdownItem>Human Resources</DropdownItem>
                      <DropdownItem>Project Management</DropdownItem>
                      <DropdownItem>Media</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Resources</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Resources Library</DropdownItem>
                      <DropdownItem>Slack Tips</DropdownItem>
                      <DropdownItem>Blog</DropdownItem>
                      <DropdownItem>Webinars</DropdownItem>
                      <DropdownItem>Slack Certified Program</DropdownItem>
                      <DropdownItem>Help Center</DropdownItem>
                      <DropdownItem>API</DropdownItem>
                      <DropdownItem>App Directory</DropdownItem>
                      <DropdownItem>Download</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/enterprise">
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
                  <span>GET STARTED</span>
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
