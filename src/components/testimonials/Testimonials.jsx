import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "FixTech Care exceeded my expectations with their thorough maintenance service. From plumbing to electrical work, they ensured every aspect of my premises was in top-notch condition. Highly recommended!",
      author: "John Doe",
    },
    {
      text: "I'm incredibly impressed with FixTech Care's prompt response and professional handling of our electrical issues. They not only fixed the problem efficiently but also provided valuable advice for future maintenance. Great job!",
      author: "Jane Smith",
    },
    {
      text: "FixTech Care's computer maintenance service saved us from potential downtime. Their proactive approach in identifying and resolving issues has greatly improved our system's performance. Thank you for your reliable support!",
      author: "Alice Johnson",
    },
    {
      text: "As a property manager, I rely on FixTech Care for comprehensive premise reviews. Their attention to detail and meticulous reports have been instrumental in maintaining our buildings' safety and functionality. A reliable partner indeed!",
      author: "Bob Anderson",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center">
        <Col md={8} xs={12}>
          <Container>
            <Row>
              <Col md={1} xs={2}>
                <FontAwesomeIcon
                  onClick={nextSlide}
                  className={styles.prevButton}
                  icon={faArrowLeft}
                />
              </Col>
              <Col className="d-flex justify-content-center" md={10} xs={8}>
                <div className={styles.testimonial}>
                  <p>{testimonials[currentSlide].text}</p>
                  <p>- {testimonials[currentSlide].author}</p>
                </div>
              </Col>
              <Col xs={1}>
                <FontAwesomeIcon
                  onClick={nextSlide}
                  className={styles.prevButton}
                  icon={faArrowRight}
                />
              </Col>
            </Row>
          </Container>
          <div className={styles.testimonialSlider}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialSlider;
