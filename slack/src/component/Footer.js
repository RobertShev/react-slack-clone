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
        <Col>
          <svg
            width="54"
            height="54"
            class="c-nav--footer__svgicon c-slackhash"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
                fill="#36C5F0"
              ></path>
              <path
                d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
                fill="#2EB67D"
              ></path>
              <path
                d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
                fill="#ECB22E"
              ></path>
              <path
                d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
                fill="#E01E5A"
              ></path>
            </g>
          </svg>
        </Col>
        <Col>
          <p>Product</p>
          <ul className="footer-list">
            <li>Features</li>
            <li>Enterprise</li>
            <li>Security</li>
            <li>Customer Stories</li>
            <li>Pricing</li>
            <li>Slack Demo</li>
          </ul>
        </Col>
        <Col>
          <p>SLACK FOR TEAMS</p>
          <ul className="footer-list">
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
          <p>RESOURCES</p>
          <ul className="footer-list">
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
          <p>COMPANY</p>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Leadership</li>
            <li>News</li>
            <li>Media Kit</li>
            <li>Careers</li>
            <li>Slack Swag Store</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="informational-list">
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
        <Col>
          © Copyright 2020 Slack Technologies, Inc. All rights reserved. Various
          trademarks held by their respective owners.
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
