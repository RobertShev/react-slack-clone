import React from 'react';
import '../sass/pages/_home.scss';
import {
  Container,
  Row,
  Col,
  Button,
  DropdownItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import Carousel from './Carousel';

function Home() {
  //Links for video
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
      <Container className="video-page centered">
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
            <a
              className="link"
              href="https://slack.com/intl/en-ee/features/channels"
            >
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
            <a
              className="link"
              href="https://slack.com/intl/en-ee/features/channels"
            >
              See how with shared channels
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="clients-page" fluid={true}>
        <Container>
          <Row>
            <Col className="centered header">
              <h2>Trusted the world over</h2>
              <p>
                Teams of every size, shape and kind have already made Slack the
                place where their work happens.
              </p>
              <a
                className="link"
                href="https://slack.com/intl/en-ee/customer-stories"
              >
                See all customer stories
              </a>
            </Col>
          </Row>
          <Row className="custom-carousel">
            <Col>
              <Carousel></Carousel>
            </Col>
          </Row>
          <Row className="custom-client-logos">
            <Col>
              <img
                src="images/content/clients/airbnb-logo.png"
                alt="Airbnb"
                height="35"
                className="centered-logo"
              />
            </Col>
            <Col>
              <img
                src="images/content/clients/electronic-arts-logo.png"
                alt="Electronic Arts"
                height="35"
                className="centered-logo "
              />
            </Col>
            <Col>
              <img
                src="images/content/clients/ameritrade-logo.png"
                alt="Ameritrade"
                height="35"
                className="centered-logo "
              />
            </Col>
            <Col>
              <img
                src="images/content/clients/oracle-logo.png"
                alt="Oracle"
                height="35"
                className="centered-logo "
              />
            </Col>
            <Col>
              <img
                src="images/content/clients/target-logo.png"
                alt="Target"
                height="35"
                className="centered-logo "
              />
            </Col>
            <Col>
              <img
                src="images/content/clients/autodesk-logo.png"
                alt="Autodesk"
                height="35"
                className="centered-logo "
              />
            </Col>
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
      </Container>
      <Container className="news-page">
        <Row>
          <Col>
            <h2 className="centered">What’s new at Slack</h2>
          </Col>
        </Row>
        <Row className="custom-card-row">
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="/images/content/cards/img-promo-remote-work.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>
                  <span>How-to</span>
                </CardSubtitle>
                <CardText>
                  <h3 className="bigger">
                    Your guide to working remotely in Slack
                  </h3>
                </CardText>
                <a
                  className="link left-bottom"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  LEARN MORE
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="/images/content/cards/shared-channels-hp-promo.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>
                  <span>Blog</span>
                </CardSubtitle>
                <CardText>
                  <h3 className="bigger">
                    Shared channels: A better way to work with people outside
                    your company
                  </h3>
                </CardText>
                <a
                  className="link left-bottom"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  LEARN MORE
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="/images/content/cards/gsuite-calendar-email-files.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>
                  <span>Blog</span>
                </CardSubtitle>
                <CardText>
                  <h3 className="bigger">
                    Slack and G Suite bring productivity to your everyday work
                  </h3>
                </CardText>
                <a
                  className="link left-bottom"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  LEARN MORE
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
