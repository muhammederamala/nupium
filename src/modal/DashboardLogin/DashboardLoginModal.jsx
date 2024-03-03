import React from "react";
import { Modal, Button, Row, Container, Col } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/index";

import styles from "./DashboardLoginModal.module.css";

function DashboardLoginModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.dashboardModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideDashboardLogin());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="md">
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container className="px-5">
              <Row className="mt-5">
                <Col
                  md={12}
                  className="d-flex justify-content-center align-items-center"
                >
                  <button className={`${styles.loginButtons}`}>
                    CHANNEL PARTNER LOGIN
                  </button>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md={5}>
                  <hr />
                </Col>
                <Col
                  md={2}
                  className="d-flex justify-content-center align-items-center"
                >
                  or
                </Col>
                <Col md={5}>
                  <hr />
                </Col>
              </Row>
              <Row className="my-5">
                <Col
                  md={12}
                  className="d-flex justify-content-center align-items-center"
                >
                  <button className={`${styles.loginButtons}`}>
                    CUSTOMER LOGIN
                  </button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
    </ModalPortal>
  );
}

export default DashboardLoginModal;
