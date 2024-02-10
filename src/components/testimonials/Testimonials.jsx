import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit augue id felis sollicitudin consequat.",
      author: "John Doe",
    },
    {
      text: "Vestibulum at quam non mi condimentum tempus sed id risus.",
      author: "Jane Smith",
    },
    {
      text: "Praesent rutrum eros vitae libero fermentum, at feugiat nisi scelerisque.",
      author: "Alice Johnson",
    },
    {
      text: "Donec ullamcorper vehicula quam, sit amet efficitur eros auctor eu. ",
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
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={8}>
          <Container>
            <Row>
              <Col xs={1}>
                <FontAwesomeIcon
                  onClick={nextSlide}
                  className={styles.prevButton}
                  icon={faArrowLeft}
                />
              </Col>
              <Col className="d-flex justify-content-center" xs={10}>
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
