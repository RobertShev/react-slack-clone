import React from 'react';
import '../sass/pages/_enterprise.scss';
import { Container, Row, Col, Button } from 'reactstrap';

function Enterprise() {
  return (
    <div>
      <Container className="enterprise-page-contact">
        <Row>
          <Col className="info-lower">
            <h2>Efficient enterprises collaborate in Slack</h2>
            <p>
              Better business decisions happen faster in Slack, the
              collaboration hub for connected enterprises.
            </p>
            <Button color="primary" to="/Registration">
              <span>CONTACT SALES</span>
            </Button>
          </Col>
          <Col>
            <img
              src="images/content/enterprise-hero.jpg"
              alt="mobile and desktop demo screenshots"
              className="main-page-image"
            />
          </Col>
        </Row>
        <Row className="alligned-info-text">
          <Col>
            <img src="images/content/organize.svg" alt="organize" />
            <h3>Enable efficient teamwork</h3>
            <p>
              Work in Slack happens in channels — a single place to communicate,
              share files, and make decisions. Channels bring together
              cross-functional and cross-departmental teams so everyone always
              stays on the same page.
            </p>
          </Col>
          <Col>
            <img src="images/content/follow.svg" alt="follow" />
            <h3>Save time for smarter work</h3>
            <p>
              Working in Slack provides faster access to people and information,
              reducing the number of meetings and emails it takes to get work
              done. Organized channels and powerful search put instant
              communication and knowledge at everyone’s fingertips.
            </p>
          </Col>
          <Col>
            <img src="images/content/focus.svg" alt="focus" />
            <h3>Put collaboration in motion</h3>
            <p>
              Collaborate from anywhere with the fast, secure, and
              fully-featured mobile app. With on-the-go access to direct and
              group messaging, file sharing, calls, and tools, you can move
              seamlessly from desktop to mobile and back again.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="sales-page centered" fluid={true}>
        <Row>
          <Col>
            <h3 className="white">
              Want to know more about Slack for your enterprise?
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="secondary" to="/Registration">
              <span>CONTACT SALES</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Enterprise;
