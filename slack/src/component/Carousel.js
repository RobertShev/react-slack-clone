import Flickity from 'react-flickity-component/';
import React from 'react';
import '../sass/custom/flickity.scss';
import { Container, Row, Col } from 'reactstrap';

const flickityOptions = {
  freeScroll: true,
  wrapAround: true,
};

function Carousel() {
  return (
    <Flickity options={flickityOptions}>
      <Container className="custom centered">
        <Container className="custom-container">
          <Row>
            <Col className="main-image-col">
              <img
                src="images/content/carousel/slack-customer-intuit.jpg"
                alt="stacked coins"
              ></img>
            </Col>
            <Col className="description-col">
              <Row className="main-logo-row">
                <Col>
                  <img
                    src="images/content/carousel/logos/intuit.png"
                    alt="stacked coins"
                  ></img>
                </Col>
              </Row>
              <Row className="italic-comment-row">
                <Col>
                  <span>
                    “Our teams tell us they’re working together and solving
                    problems much faster, because although they are spread
                    across the globe, Slack makes it like you’re in the same
                    room.”
                  </span>
                </Col>
              </Row>
              <Row className="author-row-bolt">
                <Col>
                  <span>Pam Whitmore</span>
                </Col>
              </Row>
              <Row className="author-position-row">
                <Col>
                  <span>group manager, IT, Intuit</span>
                </Col>
              </Row>
              <span className="link link-right-corner-below">READ STORY</span>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="custom centered">
        <Row>
          <Col>
            <img
              src="images/content/carousel/slack-customer-lyft.jpg"
              alt="person exiting car"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="custom centered">
        <Row>
          <Col>
            <img
              src="images/content/carousel/slack-customer-shopify.jpg"
              alt="present boxes"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="custom centered">
        <Row>
          <Col>
            <img
              src="images/content/carousel/slack-customer-everlane.jpg"
              alt="Clothing department store"
            ></img>
          </Col>
        </Row>
      </Container>
    </Flickity>
  );
}

export default Carousel;
