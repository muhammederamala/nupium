import React, { useEffect, useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
// import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import CountryPicker from "../../components/careerModalComponents/careerCountryPicker/CountryPicker";

import { modalActions } from "../../redux/index";
import CareerJobType from "../../components/careerModalComponents/careerJobType/CareerJobType";
import CareerForm from "../../components/careerModalComponents/careerForm/CareerForm";

function CareerModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.careerModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideCareerModal());
  };

  const OnSubmitHandler = () => {
    dispatch(modalActions.showCareerApplicationSubmittedModal());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="lg">
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Modal.Header closeButton>
            <Modal.Title>Please fill in the below details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <h5>Select Location</h5>
                <Col md={12} className="mt-2">
                  <CountryPicker />
                </Col>
              </Row>
              <Row className="mt-4">
                <h5>Select Job Details</h5>
                <Col md={12} className="mt-2">
                  <CareerJobType />
                </Col>
              </Row>
              <Row className="mt-4">
                <h5>Personal Details</h5>
                <Col md={12} className="mt-2">
                  <CareerForm />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHideHandler}>
              Cancel
            </Button>
            <Button variant="success" onClick={OnSubmitHandler}>
              Submit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </ModalPortal>
  );
}

export default CareerModal;
