import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = () => {
  return (
    <Container
      style={{
        border: "3px solid #e07604",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <h1 className={`${styles.section5enquiryHeading} ${styles.whiteText}`}>
        Enquiry Form
      </h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label className={styles.whiteText}>Name:</Form.Label>
          <Form.Control type="text" name="name" required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className={styles.whiteText}>Email:</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label className={styles.whiteText}>Phone:</Form.Label>
          <Form.Control type="tel" name="phone" required />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label className={styles.whiteText}>Message:</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" required />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#e07604",
            border: "none",
            marginTop: "1rem",
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EnquiryForm;
