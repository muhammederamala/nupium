import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./FeaturesScroll.module.css";

import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const FeaturesScroll = () => {
  const location = useLocation();
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

  const featuresMapArray = [
    {
      col1: {
        content:
          "We keep clients informed of upcoming services, updates, and important announcements through real-time notifications on the platform and via email.",
      },
      col2: {
        content:
          "User Can Track service records by just login into user dashboard",
      },
      icon: faBell,
      ref: ref1,
      inView: inView1,
    },
    {
      col1: {
        content:
          "Faster service with quality solutions and at a reasonable price",
      },
      col2: {
        content:
          "Improved clarity of solutions and process will not be tedious since we will be giving service at a convenient price",
      },
      icon: faTruckFast,
      ref: ref2,
      inView: inView2,
    },
    {
      col1: {
        content: "Technician minutes away from member’s property",
      },
      col2: {
        content: "100+ services under single package",
      },
      icon: faHelmetSafety,
      ref: ref3,
      inView: inView3,
    },
    {
      col1: {
        content: "Track Your Service History",
      },
      col2: {
        content: "24x7 Help Desk",
      },
      icon: faStopwatch20,
      ref: ref4,
      inView: inView4,
    },
    {
      col1: {
        content: "Subscription Based Maintenance Service Provider",
      },
      col2: {
        content: "Raise Your Service ticket both online & offline mode",
      },
      icon: faTicket,
      ref: ref5,
      inView: inView5,
    },
    {
      col1: {
        content: "Multiple categories of solutions under single annual package",
      },
      col2: {
        content:
          "Highly Skilled Technicians follow all SOP’s as per industry standards",
      },
      icon: faBoxesStacked,
      ref: ref6,
      inView: inView6,
    },
  ];

  const enterpriseFeaturesMapArray = [
    {
      col1: {
        content:
          "The only Subscription Based Facility Maintenance Service Provider for Enterprises.",
      },
      col2: {
        content:
          "Improved clarity of solutions and process will not be tedious since we will be giving service at a convenient price",
      },
      icon: faBell,
      ref: ref1,
      inView: inView1,
    },
    {
      col1: {
        content:
          "Impressive and permanent solutions with customer satisfaction ",
      },
      col2: {
        content: "100+ services under single package ",
      },
      icon: faTruckFast,
      ref: ref2,
      inView: inView2,
    },
    {
      col1: {
        content:
          "Client can Track service records by just login into dashboard ",
      },
      col2: {
        content: "24x7 Help Desk ",
      },
      icon: faHelmetSafety,
      ref: ref3,
      inView: inView3,
    },
  ];

  const currFeatures = location.pathname.startsWith("/enterprise")
    ? enterpriseFeaturesMapArray
    : featuresMapArray;

  const pcFeatures = (
    <Fragment>
      {currFeatures.map((item, index) => (
        <Row key={index} className={styles.container}>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center px-0"
          >
            <Container>
              <Row>
                <Col md={5}></Col>
                <Col md={7}>
                  <div className={`${styles.box}`}>
                    <p className={`${styles.text}`}>{item.col1.content}</p>
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
                } ${item.inView ? "animate__animated animate__bounceIn" : ""}`}
              >
                <FontAwesomeIcon
                  ref={item.ref}
                  className={`${styles.verticalIcons} ${
                    item.inView ? "animate__animated animate__bounceIn" : ""
                  }`}
                  icon={item.icon}
                />
              </div>
            </div>
            <div className={styles.verticalLine}></div>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center px-0"
          >
            <Container>
              <Row>
                <Col xs={6}>
                  <div className={styles.box}>
                    <p className={`${styles.text}`}>{item.col2.content}</p>
                  </div>
                </Col>
                <Col xs={6}></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      ))}
    </Fragment>
  );

  const mobileFeatures = (
    <Fragment>
      {currFeatures.map((item, index) => (
        <Row key={index} className={styles.container}>
          <Col
            xs={5}
            className="d-flex justify-content-center align-items-center px-0"
          >
            <Container>
              <Row>
                <Col xs={12}>
                  <div className={`${styles.box}`}>
                    <p className={`${styles.text}`}>{item.col1.content}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="px-0" style={{ height: "100%" }} xs={2}>
            <div className={`${styles.verticalIconContainer}`}>
              <div
                className={`d-flex align-items-center justify-content-center ${
                  styles.verticalIconCircle
                } ${item.inView ? "animate__animated animate__bounceIn" : ""}`}
              >
                <FontAwesomeIcon
                  ref={item.ref}
                  className={`${styles.verticalIcons} ${
                    item.inView ? "animate__animated animate__bounceIn" : ""
                  }`}
                  icon={item.icon}
                />
              </div>
            </div>
            <div className={styles.verticalLine}></div>
          </Col>
          <Col
            xs={5}
            className="d-flex justify-content-center align-items-center px-0"
          >
            <Container>
              <Row>
                <Col xs={12}>
                  <div className={styles.box}>
                    <p className={`${styles.text}`}>{item.col2.content}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      ))}
    </Fragment>
  );

  return isLargeScreen ? <>{pcFeatures}</> : mobileFeatures;
};

export default FeaturesScroll;
