import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleCheck,
  faLocationDot,
  faSquareCheck,
  faGlobe,
  faArrowLeft,
  faArrowRight,
  faArrowDownLong,
  faComputer,
  faCircleInfo,
  faCircleCheck,
  faEnvelope,
  faCreditCard,
  faUser,
  faTruck,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SubscriptionSection.module.css";

function SubscriptionSection() {
  const location = useLocation();
  const isLargeScreen = useMediaQuery({ minWidth: 860 });

  const largeScreen = (
    <Container>
      <Row>
        <Col md={6} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    Before Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#042963" }}
                            icon={faGlobe}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            visit fixtechcare.com
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through with the platform
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#f04816" }}
                            icon={faCircleInfo}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Fill the subscription form
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={9}></Col>
                    <Col className="d-flex justify-content-center" xs={3}>
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Your account is activated
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Check mail
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faCreditCard}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Make payment
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={6} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    After Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faUser}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Login to dashboard
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through all features
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#d69004" }}
                            icon={faTruck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Service request
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={9}></Col>
                    <Col className="d-flex justify-content-center" xs={3}>
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Submit feedback form
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faUserNurse}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Technician will complete the task{" "}
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Track engineer live
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );

  const smallScreen = (
    <Container>
      <Row>
        <Col xs={12} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    Before Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#042963" }}
                            icon={faGlobe}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            visit fixtechcare.com
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through with the platform
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={7}></Col>
                    <Col
                      className="d-flex justify-content-center align-items-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faCreditCard}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Make payment
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#f04816" }}
                            icon={faCircleInfo}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Fill the subscription form
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      className="d-flex justify-content-center align-items-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Check mail
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Your account is activated
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={3}></Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
        <Col xs={12} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    After Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faUser}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Login to dashboard
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={2}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through all features
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={7}></Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Track engineer live
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#d69004" }}
                            icon={faTruck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Service request
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      className="d-flex justify-content-center align-items-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={5}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faUserNurse}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Technician will complete the task{" "}
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={5}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Submit feedback form
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );

  const enterpriseLargeScreen = (
    <Container>
      <Row>
        <Col md={6} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    Before Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#042963" }}
                            icon={faGlobe}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            visit fixtechcare.com
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through with the platform
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#f04816" }}
                            icon={faCircleInfo}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Fill the subscription form
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={9}></Col>
                    <Col className="d-flex justify-content-center" xs={3}>
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Your account is activated
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Contract Sign
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faCreditCard}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Make payment
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={6} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    After Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faUser}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Team reach to client premises
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Login to Client Dashboard
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#d69004" }}
                            icon={faTruck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through with features
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={9}></Col>
                    <Col className="d-flex justify-content-center" xs={3}>
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Technician completes task
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faUserNurse}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Facility manager assigns task
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={1}>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={3}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Service request
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );

  const enterpriseSmallScreen = (
    <Container>
      <Row>
        <Col xs={12} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    Before Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#042963" }}
                            icon={faGlobe}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            visit fixtechcare.com
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through with the platform
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={7}></Col>
                    <Col
                      className="d-flex justify-content-center align-items-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faCreditCard}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Make payment
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#f04816" }}
                            icon={faCircleInfo}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Fill the subscription form
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      className="d-flex justify-content-center align-items-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Contract sign
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Your account is activated
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={3}></Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
        <Col xs={12} className="px-2" style={{ marginTop: "4rem" }}>
          <div className={`${styles.section6box}`}>
            <Container>
              <Row className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center" xs={9}>
                  <h3 className={`${styles.section6heading}`}>
                    After Subscribing
                  </h3>
                </Col>
              </Row>
              <Row className="mt-4">
                <Container>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faUser}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Team reach client premises
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col className="d-flex align-items-center" xs={2}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Login to Dashboard
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={7}></Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: "#f0d330" }}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Service request
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#d69004" }}
                            icon={faTruck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Go through all features
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      className="d-flex justify-content-center align-items-center"
                      xs={5}
                    >
                      <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={5}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            icon={faUserNurse}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Facility manages assigns task{" "}
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={2}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={`${styles.subscriptionIcons}`}
                      />
                    </Col>
                    <Col xs={5}>
                      <Card style={{ border: "none" }}>
                        <Card.Title className="d-flex justify-content-center">
                          <FontAwesomeIcon
                            style={{ color: "#0a9603" }}
                            icon={faCircleCheck}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Card.Title>
                        <Card.Body className="d-flex justify-content-center text-center">
                          <p className={`${styles.subscriptionText}`}>
                            Technician will complete the task
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );

  const currSmallScreen = location.pathname.startsWith("/enterprise")
    ? enterpriseSmallScreen
    : smallScreen;

  const currLargeScreen = location.pathname.startsWith("/enterprise")
    ? enterpriseLargeScreen
    : largeScreen;

  return isLargeScreen ? currLargeScreen : currSmallScreen;
}

export default SubscriptionSection;
