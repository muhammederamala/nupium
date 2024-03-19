import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

import styles from "./WelcomePage.module.css";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "38rem" }}
      >
        <Col md={7} className={`${styles.buttonContainer} p-0`}>
          <Container>
            <Row>
              <Col
                md={12}
                className="d-flex justify-content-center align-items-center py-5"
              >
                <button
                  onClick={() => {
                    navigate("/individual");
                  }}
                  className={`${styles.buttons}`}
                >
                  Login as Individual
                </button>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={3}>
                <hr />
              </Col>
              <Col
                md={2}
                className="d-flex justify-content-center align-items-center"
              >
                or
              </Col>
              <Col md={3}>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col
                md={12}
                className="d-flex justify-content-center align-items-center py-5"
              >
                <button
                  onClick={() => {
                    navigate("/enterprise");
                  }}
                  className={`${styles.buttons}`}
                >
                  Login as Enterprise
                </button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Container>
    </>
  );
}

export default WelcomePage;
