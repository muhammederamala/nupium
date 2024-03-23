import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/index";
import Category from "../../components/subscriptionModal/Category";
import SusbcriptionForm from "../../components/subscriptionModal/SusbcriptionForm";

function SubscriptionForm() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.subscriptionFormModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideSubscriptionFormModal());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Services Offered</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SusbcriptionForm />
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

export default SubscriptionForm;
