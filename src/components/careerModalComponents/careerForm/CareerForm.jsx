import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function CareerForm() {
  return (
    <Container>
      <form>
        <Row className="mb-3">
          <Col md={6}>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </Col>
          <Col md={6}>
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" />
          </Col>
          <Col md={6}>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <label htmlFor="contact" className="form-label">Contact Number</label>
            <input type="tel" className="form-control" id="contact" />
          </Col>
          <Col md={6}>
            <label htmlFor="ctc" className="form-label">Expected CTC</label>
            <input type="number" className="form-control" id="ctc" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <label htmlFor="experience" className="form-label">Experience (in years)</label>
            <select className="form-control" id="experience">
              <option value="0-1">0 to 1</option>
              <option value="1-3">1 to 3</option>
              <option value="3-5">3 to 5</option>
              <option value="5-10">5 to 10</option>
              <option value="10+">10+</option>
            </select>
          </Col>
          <Col md={6}>
            <label htmlFor="resume" className="form-label">Upload Resume (PDF)</label>
            <input type="file" className="form-control" id="resume" accept=".pdf" />
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default CareerForm;
