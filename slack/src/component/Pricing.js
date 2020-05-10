import React from 'react';
import '../sass/pages/_pricing.scss';
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from 'reactstrap';

function Pricing() {
  return (
    <di>
      <Container className="pricing-page">
        <Row>
          <Col>
            <h1 className="centered">Make teamwork more productive</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h3>Free</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <p>
                      For small teams trying out Slack for an unlimited period
                      of time
                    </p>
                  </CardSubtitle>
                  <CardTitle>
                    <h3>€0/mo</h3>
                  </CardTitle>
                  <Button
                    color="primary"
                    to="/Registration"
                    className="max-width"
                  >
                    <span>GET STARTED</span>
                  </Button>
                  <CardText>
                    <ul>
                      <li>
                        Access to 10,000 of your team’s most recent messages
                      </li>
                      <li>
                        10 integrations with other apps like Google Drive,
                        Office 365 and many more
                      </li>
                      <li>1:1 voice and video calls between teammates</li>
                    </ul>
                  </CardText>
                </CardBody>
                <a
                  className="link card-custom-footer centered"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  Learn more
                </a>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h3>Standard</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <p>For small- and medium-sized businesses</p>
                  </CardSubtitle>
                  <CardTitle>
                    <h3>€6.25/mo*</h3>
                  </CardTitle>
                  <Button
                    color="primary"
                    to="/Registration"
                    className="max-width"
                  >
                    <span>GET STARTED</span>
                  </Button>
                  <CardText>
                    <p className="darker">All the benefits of Free, and:</p>
                    <ul>
                      <li>
                        The full context of your organization’s message history
                        at your fingertips
                      </li>
                      <li>
                        Timely info and actions in one place with unlimited
                        integrations
                      </li>
                      <li>
                        Face-to-face communication with group voice and video
                        calls of up to 15 teammates
                      </li>
                      <li>
                        Secure collaboration with outside organizations or
                        guests from within Slack
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
                <a
                  className="link card-custom-footer centered"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  Learn more
                </a>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h3>Plus</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <p>
                      For larger businesses or those with additional
                      administration needs
                    </p>
                  </CardSubtitle>
                  <CardTitle>
                    <h3>€11.75/mo</h3>
                  </CardTitle>
                  <Button
                    color="primary"
                    to="/Registration"
                    className="max-width"
                  >
                    <span>GET STARTED</span>
                  </Button>
                  <CardText>
                    <p className="darker">All the benefits of Standard, and:</p>
                    <ul>
                      <li>
                        Advanced identity management through SAML-based SSO and
                        real-time Active Directory sync with OneLogin, Okta and
                        Ping
                      </li>
                      <li>
                        Compliance requirements met with corporate exports for
                        all message
                      </li>
                      <li>
                        Around-the-clock teamwork and assistance with 99.99%
                        guaranteed uptime and 24/7 support with a four-hour
                        response time
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
                <a
                  className="link card-custom-footer centered"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  Learn more
                </a>
              </Card>
              <Card className="card-last">
                <CardBody>
                  <CardTitle>
                    <h3>Enterprise Grid</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <p>
                      For extra large businesses or those in regulated
                      industries
                    </p>
                  </CardSubtitle>
                  <CardTitle></CardTitle>
                  <Button
                    color="primary"
                    to="/Registration"
                    className="max-width no-price"
                  >
                    <span>GET STARTED</span>
                  </Button>
                  <CardText>
                    <p className="darker">All the benefits of Plus, and:</p>
                    <ul>
                      <li>
                        Peace of mind with enterprise-grade security and
                        compliance, including Enterprise Key Management and
                        HIPAA support
                      </li>
                      <li>
                        Large scale collaboration and alignment with support for
                        up to 500,000 users
                      </li>
                      <li>
                        Streamlined administration with centralized controls and
                        customizable policies
                      </li>
                      <li>
                        Tailored support with a designated account and customer
                        success team
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
                <a
                  className="link card-custom-footer centered"
                  href="https://slack.com/intl/en-ee/features/channels"
                >
                  Learn more
                </a>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
      <Container className="sales-page centered" fluid={true}>
        <Container>
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
                <span>GET STARTED</span>
              </Button>
              <Button
                outline
                color="secondary"
                to="/Registration"
                className="button-distanced"
              >
                <span>CONTACT SALES</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </di>
  );
}

export default Pricing;
