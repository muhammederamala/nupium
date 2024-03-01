import React, { useEffect, useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
// import { useNavigate } from "react-router-dom";

import styles from "./CompanyModal.module.css";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../redux/index";

function CompanyModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.companyModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideCompanyModal());
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
                  <h4>What We Do?</h4>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12} className="d-flex text-center">
                  <p style={{ lineHeight: "2" }}>
                    FixTech Care is one & only maintenance solution for
                    individual & businesses to subscribe one & only solution to
                    cover your complete maintenance of digital systems &
                    property under service maintenance solution that includes
                    any kind of fixing at customer premises by one of the
                    companies' professional engineers at client premises. And be
                    free from all maintenance issues for their home/office
                    maintenance by using a plan subscription for multiple
                    services in one single plan
                  </p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <Container>
                    <Row>
                      <Col md={12} className="d-flex justify-content-center">
                        <h5>B to B Services:</h5>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={12} className="d-flex justify-content-center">
                        <Container>
                          <Row>
                            <Col md={6} className="d-flex text-center">
                              <Container>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Hotels
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Hospital
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Resort
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Industry
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Government
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Corporate Office
                                    </p>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                            <Col md={6} className="d-flex text-center">
                              <Container>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Housing Society
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Retail Center
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Warehouse
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Factory
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      University
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Shopping Mall
                                    </p>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <Container>
                    <Row>
                      <Col md={12} className="d-flex justify-content-center">
                        <h5>B to C Services:</h5>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={12} className="d-flex justify-content-center">
                        <Container>
                          <Row>
                            <Col md={6} className="d-flex text-center">
                              {" "}
                              {/* Added class */}
                              <Container>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Flat/Villa
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Office
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Shop/Showroom
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      House Hold
                                    </p>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                            <Col md={6} className="d-flex text-center">
                              {" "}
                              {/* Added class */}
                              <Container>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Private Farm
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      School
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Guest House
                                    </p>
                                  </Col>
                                  <Col md={6}>
                                    <p className={`${styles.servicebox}`}>
                                      Clinic
                                    </p>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="mt-5">
                <Container>
                  <Row>
                    <Col md={12}>
                      <h4>Our Values</h4>
                    </Col>
                  </Row>
                  <Row>
                    <p style={{ fontWeight: "bold",color:"#02abb6" }}>
                      Commitment, Passionate, Transparency, Consistency,
                      Efficiency
                    </p>
                  </Row>
                </Container>
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

export default CompanyModal;
