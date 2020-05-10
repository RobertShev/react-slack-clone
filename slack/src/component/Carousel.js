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
        <Container className="custom-container">
          <Row>
            <Col className="main-image-col">
              <img
                src="images/content/carousel/slack-customer-lyft.jpg"
                alt="person exiting car"
              ></img>
            </Col>
            <Col className="description-col">
              <Row className="main-logo-row">
                <Col>
                  <img
                    src="images/content/carousel/logos/lyft.png"
                    alt="stacked coins"
                  ></img>
                </Col>
              </Row>
              <Row className="italic-comment-row">
                <Col>
                  <span>
                    “When managing three hubs nationally you can’t have a good
                    conversation over email—it’s not quick enough. Coming
                    together in Slack channels allows us to easily discuss
                    day-to-day management topics. That’s invaluable.”
                  </span>
                </Col>
              </Row>
              <Row className="author-row-bolt">
                <Col>
                  <span>Benjamin Sternsmith</span>
                </Col>
              </Row>
              <Row className="author-position-row">
                <Col>
                  <span>Area Vice President of Sales, Lyft</span>
                </Col>
              </Row>
              <span className="link link-right-corner-below">READ STORY</span>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="custom centered">
        <Container className="custom-container">
          <Row>
            <Col className="main-image-col">
              <img
                src="images/content/carousel/slack-customer-shopify.jpg"
                alt="present boxes"
              ></img>
            </Col>
            <Col className="description-col">
              <Row className="main-logo-row">
                <Col>
                  <img
                    src="images/content/carousel/logos/shopify.png"
                    alt="stacked coins"
                  ></img>
                </Col>
              </Row>
              <Row className="italic-comment-row">
                <Col>
                  <span>
                    “The fact that Slack exists and is such an essential tool,
                    it's really helped us with scaling and still feeling
                    connected to one another across remote offices and remote
                    teams.”
                  </span>
                </Col>
              </Row>
              <Row className="author-row-bolt">
                <Col>
                  <span>Lisa Madokoro</span>
                </Col>
              </Row>
              <Row className="author-position-row">
                <Col>
                  <span>Culture Specialist, Shopify</span>
                </Col>
              </Row>
              <span className="link link-right-corner-below">READ STORY</span>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="custom centered">
        <Container className="custom-container">
          <Row>
            <Col className="main-image-col">
              <img
                src="images/content/carousel/slack-customer-everlane.jpg"
                alt="Clothing department store"
              ></img>
            </Col>
            <Col className="description-col">
              <Row className="main-logo-row">
                <Col>
                  <img
                    src="images/content/carousel/logos/everlane.png"
                    alt="stacked coins"
                  ></img>
                </Col>
              </Row>
              <Row className="italic-comment-row">
                <Col>
                  <span>
                    “Having Shared Channels means that the setup is so much
                    easier, especially for our vendors if they’re already in
                    Slack. I can definitely see us moving over pre-existing
                    relationships into Slack.” “Our teams tell us they’re
                    working together and solving problems much faster, because
                    although they are spread across the globe, Slack makes it
                    like you’re in the same room.”
                  </span>
                </Col>
              </Row>
              <Row className="author-row-bolt">
                <Col>
                  <span>Brian Alenduff</span>
                </Col>
              </Row>
              <Row className="author-position-row">
                <Col>
                  <span>Digital Product Manager, Everlane & Happy Returns</span>
                </Col>
              </Row>
              <span className="link link-right-corner-below">READ STORY</span>
            </Col>
          </Row>
        </Container>
      </Container>
    </Flickity>
  );
}

export default Carousel;
