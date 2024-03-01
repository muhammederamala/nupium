import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/index";

function ContactUsModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.contactUsModal);

  const formRef = useRef(null);
  const subjectRef = useRef(null);
  const queryTypeRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);
  const contactRef = useRef(null);
  const descriptionRef = useRef(null);

  const onHideHandler = () => {
    dispatch(modalActions.hideContactUsModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      subject: subjectRef.current.value,
      queryType: queryTypeRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      contact: contactRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log("Form Data:", formData);

    subjectRef.current.value = "";
    queryTypeRef.current.value = "Account";
    nameRef.current.value = "";
    emailRef.current.value = "";
    cityRef.current.value = "";
    contactRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="md">
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Modal.Header closeButton>
            <Modal.Title>Feel free to contact us.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject"
                  ref={subjectRef}
                />
              </Form.Group>

              <Form.Group controlId="formQueryType" className="mb-3">
                <Form.Label>Query Type</Form.Label>
                <Form.Control as="select" ref={queryTypeRef}>
                  <option>Account</option>
                  <option>Payment</option>
                  <option>Service</option>
                  <option>Sales Complaint</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  ref={nameRef}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group controlId="formCity" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  ref={cityRef}
                />
              </Form.Group>

              <Form.Group controlId="formContact" className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact number"
                  ref={contactRef}
                />
              </Form.Group>

              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  ref={descriptionRef}
                />
              </Form.Group>
            </Form>
            <div style={{ fontSize: "2.5vh" }}>
              <p>
                <strong>Email At:</strong> info@fixtechcare.com
              </p>
              <p>
                <strong>General:</strong> +912269621753 [10:00 am to 06:00 pm]
                I.S.T
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHideHandler}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </ModalPortal>
  );
}

export default ContactUsModal;
