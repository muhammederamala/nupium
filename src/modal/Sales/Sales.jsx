import React, { useRef } from "react";
import { Modal, Button, Row, Container, Col } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/index";

import salesContactImage from "../../assets/images/salesContactImage.jpg";

function Sales() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.salesModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideSalesModal());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="md">
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Modal.Header closeButton>
            <Modal.Title>Feel free to contact us.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={10}>
                  <Container>
                    <Row className="border">
                      <Col md={6}>
                        <Container>
                          <Row>
                            <Col md={12}>
                              <h5>Mr. Rohit Oberai</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12}>
                              <h6>+97000000000</h6>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col md={6}>
                        <img
                          src={salesContactImage}
                          style={{ width: "100%", borderRadius: "50%" }}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="mt-4">
                <h5>Asia</h5>
                <p>
                  India, Singapore, Thailand, Australia, New Zealand, Hong Kong,
                  UAE
                </p>
              </Row>
              <Row>
                <h5>Europe</h5>
                <p>
                  United Kingdom, Ireland, Netherlans, Italy, Hungary,
                  Switzerlans, Poland, Sweden, Germany, Denmark, Belgium,
                  France, Spain, Portugal
                </p>
              </Row>
              <Row>
                <h5>North America</h5>
                <p>Canada, USA</p>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHideHandler}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </ModalPortal>
  );
}

export default Sales;
