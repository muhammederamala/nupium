import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { UseDispatch, useDispatch } from "react-redux";
import { modalActions } from "../../redux";

import styles from "./FooterComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoImage from "../../assets/images/logoimage.png";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function FooterComponent() {
  const dispatch = useDispatch();

  const CareerClickHandler = () => {
    dispatch(modalActions.showCareerModal());
  };

  const CompanyClickHandler = () => {
    dispatch(modalActions.showCompanyModal());
  };

  const ContactUsClickHandler = () => {
    dispatch(modalActions.showContactUsModal());
  };

  return (
    <footer className={`footer ${styles.footerComponent}`}>
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <Container>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6
                    className={styles.footerHeading}
                    onClick={CompanyClickHandler}
                  >
                    Company
                  </h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Management</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Sales Contact</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6
                    className={styles.footerHeading}
                    onClick={ContactUsClickHandler}
                  >
                    Contact Us
                  </h6>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4}>
            <Container>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Dashboard Login</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6
                    className={styles.footerHeading}
                    onClick={CareerClickHandler}
                  >
                    Career
                  </h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Corporate Offices</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Packages Globally</h6>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4}>
            <Container>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Terms and Conditions</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Privacy policy</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>Payment policy</h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>
                    Cancellation and refund policy
                  </h6>
                </Col>
              </Row>
              <Row className={`${styles.footerRows}`}>
                <Col md={12}>
                  <h6 className={styles.footerHeading}>
                    Shipping and delivery
                  </h6>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col md={2}>
                <img src={logoImage} alt="logo" className="img-fluid" />
              </Col>
              <Col
                md={8}
                className="d-flex justify-content-center align-items-center"
              >
                <FontAwesomeIcon
                  className={`${styles.copyrightcon}`}
                  icon={faCopyright}
                />
                Copyright
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
