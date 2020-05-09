import React from 'react';
import '../sass/pages/_home.scss';
import { Container, Row, Col, Button, DropdownItem } from 'reactstrap';

function Home() {
  const url_1 =
    'https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_inline-video.mp4';
  const url_2 =
    'https://a.slack-edge.com/d6bad/marketing/img/features/channels/video/inline-1/channels-inline1.mp4';
  const url_3 =
    'https://a.slack-edge.com/d6bad/marketing/img/features/shared-channels/videos/inline-3/shared-channels-inline3.mp4';
  return (
    <div>
      <Container className="introduction-page">
        <Row>
          <Col>
            <Col>
              <span className="bolt-span-text">WORK FROM HOME</span>
            </Col>
            <Col>
              <h1>Slack brings the team together, wherever you are</h1>
              <p>
                With all of your communication and tools in one place, remote
                teams will stay productive no matter where you’re working from.
              </p>
            </Col>
            <Col>
              <Button color="primary" to="/Registration">
                <span>LEARN MORE</span>
              </Button>
              <Button
                outline
                color="primary"
                to="/Registration"
                className="button-distanced"
              >
                <span>CONTACT US</span>
              </Button>
            </Col>
          </Col>
          <Col>
            <img
              src="images/content/main-page-1.jpg"
              alt="mobile and desktop demo screenshots"
              className="main-page-image"
            />
          </Col>
        </Row>
      </Container>
      <Container className="video-page">
        <Row>
          <Col>
            <h2>Break out of the inbox</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Working in channels gives everyone on your team a shared view of
              progress and purpose.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <video
              className="video-loop"
              key={url_1}
              autoplay=""
              loop=""
              muted=""
              playsinline=""
              poster="https://a.slack-edge.com/faab8/marketing/img/homepage/video/brand-campaign_inline-poster.jpg"
            >
              <source src={url_1} />
            </video>
          </Col>
        </Row>
        <Row className="alligned-info-text">
          <Col>
            <img src="images/content/organize.svg" alt="organize" />
            <h3>Conversations, organized</h3>
            <p>
              Instead of a single overstuffed inbox, conversations in Slack
              happen in dedicated spaces called channels.
            </p>
          </Col>
          <Col>
            <img src="images/content/follow.svg" alt="follow" />
            <h3>Get looped in, not out</h3>
            <p>
              Slack makes it simple to follow conversations or find important
              information in an easily searchable archive.
            </p>
          </Col>
          <Col>
            <img src="images/content/focus.svg" alt="focus" />
            <h3>Give focus a chance</h3>
            <p>
              Unlike email, Slack lets you choose which conversations are most
              important — and which can wait.
            </p>
          </Col>
        </Row>
      </Container>
      <DropdownItem divider />
      <Container className="features-page">
        <Row>
          <Col>
            <h2>Make the change to channels</h2>
            <p>
              Productive teamwork happens in channels — organized spaces for
              everything related to a project, topic or team.
            </p>
            <a href="https://slack.com/intl/en-ee/features/channels">
              Learn more about channels
            </a>
          </Col>
          <Col>
            <video
              className="video-loop"
              key={url_2}
              autoplay=""
              loop=""
              muted=""
              playsinline=""
              poster="https://a.slack-edge.com/233de/marketing/img/features/channels/video/inline-1/channels-inline1.jpg"
            >
              <source src={url_2} />
            </video>
          </Col>
        </Row>
        <Row>
          <Col>
            <video
              className="video-loop"
              key={url_3}
              autoplay=""
              loop=""
              muted=""
              playsinline=""
              poster="https://a.slack-edge.com/233de/marketing/img/features/shared-channels/videos/inline-3/shared-channels-inline3.jpg"
            >
              <source src={url_3} />
            </video>
          </Col>
          <Col>
            <h2>Shared channels bring companies together</h2>
            <p>
              Now channels can help you work as closely with external partners
              and clients as you do with teams down the hall.
            </p>
            <a href="https://slack.com/intl/en-ee/features/channels">
              See how with shared channels
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="clients-page">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
