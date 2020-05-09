import React from 'react';
import '../sass/components/_footer.scss';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <Row>
        <Col className="seconday-logo">
          <img src="images/small-logo.svg" alt="Slack logo"></img>
        </Col>
        <Col>
          <ul className="footer-list">
            <li>
              <p>Product</p>
            </li>
            <li>Features</li>
            <li>Enterprise</li>
            <li>Security</li>
            <li>Customer Stories</li>
            <li>Pricing</li>
            <li>Slack Demo</li>
          </ul>
        </Col>
        <Col>
          <ul className="footer-list">
            <li>
              <p>SLACK FOR TEAMS</p>
            </li>
            <li>Engineering</li>
            <li>Financial Services</li>
            <li>Sales</li>
            <li>IT</li>
            <li>Marketing</li>
            <li>Customer Support</li>
            <li>Human Resources</li>
            <li>Project Management</li>
            <li>Media</li>
          </ul>
        </Col>
        <Col>
          <ul className="footer-list">
            <li>
              <p>RESOURCES</p>
            </li>
            <li>Slack Tips</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Slack Certified Program</li>
            <li>Help Center</li>
            <li>API</li>
            <li>App Directory</li>
            <li>Download Slack</li>
            <li>Partners</li>
          </ul>
        </Col>
        <Col>
          <ul className="footer-list">
            <li>
              <p>COMPANY</p>
            </li>
            <li>About Us</li>
            <li>Leadership</li>
            <li>News</li>
            <li>Media Kit</li>
            <li>Careers</li>
            <li>Slack Swag Store</li>
          </ul>
        </Col>
      </Row>
      <Row className="footer-secondary">
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
              <FontAwesomeIcon icon={faGlobe} />
              <a>Change Region</a>
            </li>
          </ul>
        </Col>
        <Col className="social-networks">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedin} />
        </Col>
      </Row>
      <Row>
        <Col className="footer-copyright">
          <span>
            &copy; Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
