import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./FeaturesScroll.module.css";

import { useInView } from "react-intersection-observer";

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
  const [ref1, inView1] = useInView({
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });

  const [ref6, inView6] = useInView({
    threshold: 0.5,
  });

  const [ref7, inView7] = useInView({
    threshold: 0.5,
  });

  const [ref8, inView8] = useInView({
    threshold: 0.5,
  });

  const [ref9, inView9] = useInView({
    threshold: 0.5,
  });

  const [ref10, inView10] = useInView({
    threshold: 0.5,
  });

  const [ref11, inView11] = useInView({
    threshold: 0.5,
  });

  const [ref12, inView12] = useInView({
    threshold: 0.5,
  });

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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView1 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref1}
                className={`${styles.verticalIcons} ${
                  inView1 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView2 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref2}
                className={`${styles.verticalIcons} ${
                  inView2 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView3 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref3}
                className={`${styles.verticalIcons} ${
                  inView3 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView4 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref4}
                className={`${styles.verticalIcons} ${
                  inView4 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView5 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref5}
                className={`${styles.verticalIcons} ${
                  inView5 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView6 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref6}
                className={`${styles.verticalIcons} ${
                  inView6 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView7 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref7}
                className={`${styles.verticalIcons} ${
                  inView7 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView8 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref8}
                className={`${styles.verticalIcons} ${
                  inView8 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView9 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref9}
                className={`${styles.verticalIcons} ${
                  inView9 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView10 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref10}
                className={`${styles.verticalIcons} ${
                  inView10 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView11 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref11}
                className={`${styles.verticalIcons} ${
                  inView11 ? "animate__animated animate__bounceIn" : ""
                }`}
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
              className={`d-flex align-items-center justify-content-center ${
                styles.verticalIconCircle
              } ${inView12 ? "animate__animated animate__bounceIn" : ""}`}
            >
              <FontAwesomeIcon
                ref={ref12}
                className={`${styles.verticalIcons} ${
                  inView12 ? "animate__animated animate__bounceIn" : ""
                }`}
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
