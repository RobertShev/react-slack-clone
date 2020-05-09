import React from 'react';
import '../sass/components/_footer.scss';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as RRNavLink } from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row className="footer-primary">
        <Container>
          <Row>
            <Col>
              <img
                src="images/logo/small-logo.svg"
                alt="Slack logo"
                className="secondary-logo"
              ></img>
            </Col>
            <Col>
              <ul className="footer-list">
                <li>
                  <p>Product</p>
                </li>
                <li>
                  <RRNavLink to="/">Features</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Enterprise</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Security</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Customer Stories</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Pricing</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Slack Demo</RRNavLink>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li>
                  <p>SLACK FOR TEAMS</p>
                </li>
                <li>
                  <RRNavLink to="/">Engineering</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Financial Services</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Sales</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">IT</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Marketing</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Customer Support</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Human Resources</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Project Management</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Media</RRNavLink>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li>
                  <p>RESOURCES</p>
                </li>
                <li>
                  <RRNavLink to="/">Slack Tips</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Blog</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Events</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Slack Certified Program</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Help Center</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">API</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">App Directory</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Download Slack</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Partners</RRNavLink>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li>
                  <p>COMPANY</p>
                </li>
                <li>
                  <RRNavLink to="/">About Us</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Leadership</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">News</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Media Kit</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Careers</RRNavLink>
                </li>
                <li>
                  <RRNavLink to="/">Slack Swag Store</RRNavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="footer-secondary">
        <Container>
          <Row>
            <Col className="informational-list">
              <ul>
                <li>
                  <a>Status</a>
                </li>
                <li>
                  <a>Privacy & Terms</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="icon" />
                  <a>Change Region</a>
                </li>
              </ul>
            </Col>
            <Col className="social-networks">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/tiny-spec-inc/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="social-network-icons"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCY3YECgeBcLCzIrFLP4gblw">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="social-network-icons"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/slackhq">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="social-network-icons"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/slackhq">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social-network-icons"
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="footer-copyright">
        <Container>
          <Row>
            <Col>
              <span>
                &copy; Copyright 2020 Slack Technologies, Inc. All rights
                reserved. Various trademarks held by their respective owners.
              </span>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Footer;
