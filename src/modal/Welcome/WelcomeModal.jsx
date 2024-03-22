import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { redirect } from "react-router";

import styles from "./WelcomeModal.module.css";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../redux/index";

function WelcomeModal({ navigate }) {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.welcomeModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideWelcomeModal());
    window.location.href = '/enterprise'
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="md">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container
            className="d-flex justify-content-center align-items-center"
          >
            <Col md={12} className={`${styles.buttonContainer} p-0`}>
              <Container>
                <Row>
                  <Col
                    md={12}
                    className="d-flex justify-content-center align-items-center py-5"
                  >
                    <button
                      onClick={() => {
                        dispatch(modalActions.hideWelcomeModal());
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
                      onClick={onHideHandler}
                      className={`${styles.buttons}`}
                    >
                      Login as Enterprise
                    </button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHideHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalPortal>
  );
}

export default WelcomeModal;
