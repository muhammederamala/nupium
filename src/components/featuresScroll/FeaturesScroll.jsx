import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./FeaturesScroll.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMediaQuery } from "react-responsive";
import {
  faBell,
  faBox,
  faBoxesStacked,
  faChartLine,
  faClockRotateLeft,
  faHammer,
  faHelmetSafety,
  faList,
  faLocationCrosshairs,
  faStopwatch20,
  faTicket,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const featuresArray = [
  "We keep clients informed of upcoming services, updates, and important announcements through real-time notifications on the platform and via email.",
  "User Can Track service records by just login into user dashboard ",
  "Faster service with quality solutions and at a reasonable price ",
  "Improved clarity of solutions and process will not be tedious since we will be giving service at a convenient price",
  "Technician minutes away from member’s property ",
  "100+ services under single package",
  "Track Your Service History",
  "24x7 Help Desk ",
  "Subscription Based Maintenance Service Provider ",
  "Raise Your Service ticket both online & offline mode ",
  "Multiple categories of solutions under single annual package ",
  "Highly Skilled Technicians follow all SOP’s as per industry standards ",
];

const FeaturesScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const isLargeScreen = useMediaQuery({ minWidth: 860 });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const featuresDesktop = (
    <Fragment>
      <Row className={styles.container}>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center px-0"
        >
          <Container>
            <Row>
              <Col md={5}></Col>
              <Col md={7}>
                <div className={`${styles.box}`}>
                  <p className={`${styles.text}`}>{featuresArray[0]}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="px-0" style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faBell}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center px-0"
        ></Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faLocationCrosshairs}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.box}>
                  <p className={`${styles.text}`}>{featuresArray[1]}</p>
                </div>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={5}></Col>
              <Col xs={7}>
                <div className={`${styles.box}`}>
                  <p className={`${styles.text}`}>{featuresArray[2]}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faTruckFast}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faChartLine}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.box}>
                  <p className={`${styles.text}`}>{featuresArray[3]}</p>
                </div>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={5}></Col>
              <Col xs={7}>
                <div className={`${styles.box}`}>
                  <p className={`${styles.text}`}>{featuresArray[4]}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faStopwatch20}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faBox}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.box}>
                  <p className={`${styles.text}`}>{featuresArray[5]}</p>
                </div>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={5}></Col>
              <Col xs={7}>
                <div className={`${styles.box}`}>
                  <p className={`${styles.text}`}>{featuresArray[6]}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faList}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faClockRotateLeft}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.box}>
                  <p className={`${styles.text}`}>{featuresArray[7]}</p>
                </div>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={5}></Col>
              <Col xs={7}>
                <div className={`${styles.box}`}>
                  <p className={`${styles.text}`}>{featuresArray[8]}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faHammer}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faTicket}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.box}>
                  <p className={`${styles.text}`}>{featuresArray[9]}</p>
                </div>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={5}></Col>
              <Col xs={7}>
                <div className={`${styles.box}`}>
                  <p className={`${styles.text}`}>{featuresArray[10]}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faBoxesStacked}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
      <Row className={styles.container}>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        ></Col>
        <Col style={{ height: "100%" }} md={2} xs={0}>
          <div className={`${styles.verticalIconContainer}`}>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.verticalIconCircle}`}
            >
              <FontAwesomeIcon
                className={`${styles.verticalIcons}`}
                icon={faHelmetSafety}
              />
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </Col>
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.box}>
                  <p className={`${styles.text}`}>{featuresArray[11]}</p>
                </div>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Fragment>
  );

  return isLargeScreen ? <>{featuresDesktop}</> : null;
};

export default FeaturesScroll;
