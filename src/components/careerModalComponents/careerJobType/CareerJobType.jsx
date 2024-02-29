import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function CareerJobType() {
  const [department, setDepartment] = useState([
    "Marketing",
    "Sales",
    "Human resources",
    "Technology",
    "Back operations",
    "Technician",
    "Administeration",
  ]);

  return (
    <Container>
      <Row>
        <Col md={4} className="d-flex align-items-center">
          <p className="m-0">Position Applied as:</p>
        </Col>
        <Col md={6}>
          <select className="form-control mt-2">
            <option value="">Select Position</option>
            <option value="Fresher">Fresher</option>
            <option value="Experienced">Experienced</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="d-flex align-items-center">
          <p className="m-0">Position Applied for:</p>
        </Col>
        <Col md={6}>
          <select className="form-control mt-2">
            <option value="">Select Department</option>
            {department.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="d-flex align-items-center">
          <p className="m-0">Position type:</p>
        </Col>
        <Col md={6}>
          <select className="form-control mt-2">
            <option value="">Select Position</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
}

export default CareerJobType;
