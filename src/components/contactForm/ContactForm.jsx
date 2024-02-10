// ContactForm.js
import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Form className={styles.form}>
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formFullName">
              <Form.Label className={styles.formLabel}>Full Name</Form.Label>
              <Form.Control
                style={{
                  color: "white",
                }}
                type="text"
                placeholder="Enter your full name"
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group
              className={`${styles.formGroup}`}
              controlId="formAddress"
            >
              <Form.Label className={styles.formLabel}>Address</Form.Label>
              <Form.Control
                style={{
                  color: "white",
                }}
                type="text"
                placeholder="Enter your address"
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group className={`${styles.formGroup}`} controlId="formEmail">
              <Form.Label className={styles.formLabel}>Email</Form.Label>
              <Form.Control
                style={{
                  color: "white",
                }}
                type="email"
                placeholder="Enter your email"
                className={styles.formControl}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formTelephone">
              <Form.Label className={styles.formLabel}>Telephone</Form.Label>
              <Form.Control
                style={{
                  color: "white",
                }}
                type="tel"
                placeholder="Enter your telephone number"
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group
              className={`${styles.formGroup}`}
              controlId="formDateBooking"
            >
              <Form.Label className={styles.formLabel}>Date Booking</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date for booking"
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group
              className={`${styles.formGroup}`}
              controlId="formDropdown"
            >
              <Form.Label className={styles.formLabel}>Dropdown</Form.Label>
              <Form.Control
                style={{
                  color: "white",
                }}
                as="select"
                className={styles.formControl}
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="px-5 mt-4">
          <Button variant="primary" type="submit" className={styles.btnPrimary}>
            <strong>SUBMIT</strong>
          </Button>
        </Row>
      </Container>
    </Form>
  );
};

export default ContactForm;
