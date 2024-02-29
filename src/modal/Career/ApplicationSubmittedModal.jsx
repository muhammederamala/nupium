import React, { useEffect, useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
// import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faSmile } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../redux/index";

function ApplicationSubmittedModal() {
  const dispatch = useDispatch();
  const showModal = useSelector(
    (state) => state.modal.careerApplicationSubmittedModal
  );

  const onHideHandler = () => {
    dispatch(modalActions.hideCareerApplicationSubmittedModal());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="lg">
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col
                  md={12}
                  className="d-flex justify-content-center align-items-center"
                >
                  <FontAwesomeIcon
                    style={{
                      color: "green",
                      backgroundColor: "white",
                      fontSize: "10vh",
                    }}
                    icon={faFaceSmile}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12} className="d-flex text-center">
                  <p>
                    Thanks for submitting your application we will get back to
                    you within 24:00 to 48:00 hrs as per working days (Monday to
                    Friday)
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHideHandler}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </ModalPortal>
  );
}

export default ApplicationSubmittedModal;
