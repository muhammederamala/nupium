import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleCheck,
  faLocationDot,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

import mainVideo from "../../assets/videos/main.mp4";
import image1 from "../../assets/images/section2image1.jpg";
import image2 from "../../assets/images/section2image2.jpg";
import image3 from "../../assets/images/section2image3.jpg";
import image4 from "../../assets/images/section3image1.jpg";

import styles from "./HomePage.module.css";
import ContactForm from "../../components/contactForm/ContactForm";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import Counter from "../../components/Counter/Counter";
import EnquiryForm from "../../components/enquiryForm/EnquiryForm";
import TestimonialSlider from "../../components/testimonials/Testimonials";

function HomePage() {
  const welcomeTextValue = [
    "Electronics Maintenance",
    "Plumbing Maintenance",
    "Computer Maintenance",
  ];

  const [reachedSection4, setReachedSection4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 1750;
      if (scrollPosition >= threshold) {
        setReachedSection4(true);
      } else {
        setReachedSection4(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const asiaPacificCountries = [
    "China",
    "Japan",
    "India",
    "Australia",
    "South Korea",
  ];

  const europeCountries = [
    "Germany",
    "France",
    "United Kingdom",
    "Italy",
    "Spain",
  ];

  const northAmericaCountries = [
    "United States",
    "Canada",
    "Mexico",
    "Guatemala",
    "Honduras",
  ];

  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleButtonClick = (region) => {
    setSelectedRegion(region);
  };

  const renderCountries = () => {
    switch (selectedRegion) {
      case "Asia Pacific":
        return asiaPacificCountries.map((country) => (
          <Container>
            <Row className="mt-4">
              <Col xs={2}>
                <FontAwesomeIcon
                  className={`${styles.section5icons}`}
                  icon={faLocationDot}
                />
              </Col>
              <Col className="d-flex align-items-center" xs={5}>
                <li style={{ fontWeight: "800" }} key={country}>
                  {country}
                </li>
              </Col>
            </Row>
          </Container>
        ));
      case "Europe":
        return europeCountries.map((country) => (
          <Container>
            <Row className="mt-4">
              <Col xs={2}>
                <FontAwesomeIcon
                  className={`${styles.section5icons}`}
                  icon={faLocationDot}
                />
              </Col>
              <Col className="d-flex align-items-center" xs={5}>
                <li style={{ fontWeight: "800" }} key={country}>
                  {country}
                </li>
              </Col>
            </Row>
          </Container>
        ));
      case "North America":
        return northAmericaCountries.map((country) => (
          <Container>
            <Row className="mt-4">
              <Col xs={2}>
                <FontAwesomeIcon
                  className={`${styles.section5icons}`}
                  icon={faLocationDot}
                />
              </Col>
              <Col className="d-flex align-items-center" xs={5}>
                <li style={{ fontWeight: "800" }} key={country}>
                  {country}
                </li>
              </Col>
            </Row>
          </Container>
        ));
      default:
        return null;
    }
  };

  return (
    <>
      <section className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
          <source src={mainVideo} type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        <div className={`${styles.formOverlay}`}>
          <Container>
            <Row style={{ marginTop: "5rem" }}>
              <Col style={{ marginTop: "5rem" }} md={6}>
                <Container>
                  <Row>
                    <Col md={12}>
                      <div>
                        <h1 className={`${styles.welcomeText}`}>
                          We Are The Better
                        </h1>
                        <WelcomeText
                          textArray={welcomeTextValue}
                          animationDelay={3000}
                        />
                        <h1 className={`${styles.welcomeText}`}>Business</h1>
                        <h1 className={`${styles.welcomeText}`}>Services</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={4}>
                      <Card className={`${styles.milestones}`}>
                        <Card.Body style={{ padding: "0px" }}>
                          <h1 className={`${styles.milestonesNumber}`}>
                            <Counter finalValue={15} duration={750} />+
                          </h1>
                        </Card.Body>
                        <Card.Footer
                          style={{ padding: "0px" }}
                          className={`${styles.milestonesText}`}
                        >
                          Our Services
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col xs={4}>
                      <Card className={`${styles.milestones}`}>
                        <Card.Body style={{ padding: "0px" }}>
                          <h1 className={`${styles.milestonesNumber}`}>
                            <Counter finalValue={50} duration={750} />+
                          </h1>
                        </Card.Body>
                        <Card.Footer
                          style={{ padding: "0px" }}
                          className={`${styles.milestonesText}`}
                        >
                          Professional
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col xs={4}>
                      <Card className={`${styles.milestones}`}>
                        <Card.Body style={{ padding: "0px" }}>
                          <h1 className={`${styles.milestonesNumber}`}>
                            <Counter finalValue={500} duration={750} />+
                          </h1>
                        </Card.Body>
                        <Card.Footer
                          style={{ padding: "0px" }}
                          className={`${styles.milestonesText}`}
                        >
                          Happy Clients
                        </Card.Footer>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col style={{ marginTop: "5rem" }} md={6}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Container>
          <Row className="d-flex text-center">
            <h1 style={{ fontWeight: "800" }}>Our Services</h1>
          </Row>
          <Row>
            <Col style={{ marginTop: "2rem" }} md={4}>
              <div className={styles.imageContainer}>
                <div className={`${styles.imageOverlay} px-4`}>
                  <span>
                    <h1 className={styles.overlayHeading}>House Cleaning</h1>
                    <p className={styles.overlayContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className={styles.overlayButton}>Learn More</button>
                  </span>
                </div>
                <Image src={image1} fluid className={styles.image} />
              </div>
            </Col>
            <Col style={{ marginTop: "2rem" }} md={4}>
              <div className={styles.imageContainer}>
                <div className={`${styles.imageOverlay} px-4`}>
                  <span>
                    <h1 className={styles.overlayHeading}>Office Cleaning</h1>
                    <p className={styles.overlayContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className={styles.overlayButton}>Learn More</button>
                  </span>
                </div>
                <Image src={image2} fluid className={styles.image} />
              </div>
            </Col>
            <Col style={{ marginTop: "2rem" }} md={4}>
              <div className={styles.imageContainer}>
                <div className={`${styles.imageOverlay} px-4`}>
                  <span>
                    <h1 className={styles.overlayHeading}>Outsource Work</h1>
                    <p className={styles.overlayContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className={styles.overlayButton}>Learn More</button>
                  </span>
                </div>
                <Image src={image3} fluid className={styles.image} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginBottom: "5rem" }}>
        <Container>
          <Row className="d-flex text-center">
            <h1 className={`${styles.section3heading}`}>Who We Are</h1>
          </Row>
          <Row>
            <Col style={{ marginTop: "2rem" }} md={6}>
              <div>
                <img
                  src={image4}
                  className={`img-fluid ${styles.section3Image}`}
                />
              </div>
            </Col>
            <Col style={{ marginTop: "2rem" }} md={6}>
              <Container>
                <Row>
                  <p className={`${styles.section3paragraph}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </Row>
                <Row style={{ marginTop: "1rem" }}>
                  <Col md={6}>
                    <FontAwesomeIcon
                      className={`${styles.section3icons}`}
                      icon={faSquareCheck}
                    />
                    <h3 className={`${styles.section3subHeading}`}>
                      15 Years Experience Of Business
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                  <Col md={6}>
                    <FontAwesomeIcon
                      className={`${styles.section3icons}`}
                      icon={faHouseCircleCheck}
                    />
                    <h3 className={`${styles.section3subHeading}`}>
                      Have More Than 50 + Branch
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginTop: "3rem" }}>
        <Container>
          <Row className="text-center">
            <h1 style={{ fontWeight: "800" }}>How We Operate</h1>
          </Row>
          <Row className="mt-4">
            <Col style={{ marginTop: "2rem" }} md={4}>
              <Container>
                <Row className="d-flex justify-content-center">
                  <div
                    className={`${
                      styles.section4circle
                    } d-flex justify-content-center align-items-center ${
                      reachedSection4
                        ? "animate__animated animate__fadeInUp"
                        : ""
                    }`}
                  >
                    <h1 className={`${styles.section4number}`}>1</h1>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                  <div className={`${styles.sectionNumberBox}`}>
                    <Container>
                      <Row className="d-flex text-center">
                        <h1 className={`${styles.section4heading}`}>
                          Make An Offer
                        </h1>
                      </Row>
                      <Row className="d-flex text-center">
                        <p className={`${styles.section4paragraph}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </Row>
                    </Container>
                  </div>
                </Row>
              </Container>
            </Col>
            <Col style={{ marginTop: "2rem" }} md={4}>
              <Container>
                <Row className="d-flex justify-content-center">
                  <div
                    className={`${
                      styles.section4circle
                    } d-flex justify-content-center align-items-center ${
                      reachedSection4
                        ? "animate__animated animate__fadeInUp"
                        : ""
                    }`}
                  >
                    <h1 className={`${styles.section4number}`}>2</h1>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                  <div className={`${styles.sectionNumberBox}`}>
                    <Container>
                      <Row className="d-flex text-center">
                        <h1 className={`${styles.section4heading}`}>
                          We Call & Deals
                        </h1>
                      </Row>
                      <Row className="d-flex text-center">
                        <p className={`${styles.section4paragraph}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </Row>
                    </Container>
                  </div>
                </Row>
              </Container>
            </Col>
            <Col style={{ marginTop: "2rem" }} md={4}>
              <Container>
                <Row className="d-flex justify-content-center">
                  <div
                    className={`${
                      styles.section4circle
                    } d-flex justify-content-center align-items-center ${
                      reachedSection4
                        ? "animate__animated animate__fadeInUp"
                        : ""
                    }`}
                  >
                    <h1 className={`${styles.section4number}`}>3</h1>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                  <div className={`${styles.sectionNumberBox}`}>
                    <Container>
                      <Row className="d-flex text-center">
                        <h1 className={`${styles.section4heading}`}>
                          Our Team Work
                        </h1>
                      </Row>
                      <Row className="d-flex text-center">
                        <p className={`${styles.section4paragraph}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </Row>
                    </Container>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginTop: "8rem" }}>
        <Container>
          <Row>
            <Col md={6}>
              <Container>
                <Row>
                  <h1 className={`${styles.section5locationHeading}`}>
                    Locations
                  </h1>
                </Row>
                <Row className="mt-3">
                  <Col xs={4}>
                    <button
                      className={`${styles.section5countriesButton}`}
                      onClick={() => handleButtonClick("Asia Pacific")}
                    >
                      Asia Pacific
                    </button>
                  </Col>
                  <Col xs={4}>
                    <button
                      className={`${styles.section5countriesButton}`}
                      onClick={() => handleButtonClick("Europe")}
                    >
                      Europe
                    </button>
                  </Col>
                  <Col xs={4}>
                    <button
                      className={`${styles.section5countriesButton}`}
                      onClick={() => handleButtonClick("North America")}
                    >
                      North America
                    </button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <h4 style={{ fontWeight: "800" }}>Our facilities</h4>
                  <ul style={{ listStyleType: "none" }}>{renderCountries()}</ul>
                </Row>
              </Container>
            </Col>
            <Col md={6}>
              <EnquiryForm />
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginTop: "4rem" }}>
        <Container>
          <Row>
            <Col md={6} className="px-2" style={{ marginTop: "4rem" }}>
              <div className={`${styles.section6box}`}>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col className="d-flex justify-content-center" xs={9}>
                      <h3 className={`${styles.section6heading}`}>
                        Before Subscribing
                      </h3>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center mt-4">
                    <Col xs={10}>
                      <ol className={`${styles.section6list}`}>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Nulla ac velit nec arcu sollicitudin lacinia eget eget
                          velit.
                        </li>
                        <li>
                          Praesent rutrum eros vitae libero fermentum, at
                          feugiat nisi scelerisque.
                        </li>
                        <li>
                          Etiam vel quam eget mi efficitur feugiat a eu metus.
                        </li>
                        <li>
                          Mauris sed ex id felis fermentum fermentum vel ut
                          nunc.
                        </li>
                      </ol>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col md={6} className="px-2" style={{ marginTop: "4rem" }}>
              <div className={`${styles.section6box}`}>
                <Container>
                  <Row className="d-flex justify-content-center">
                    <Col className="d-flex justify-content-center" xs={9}>
                      <h3 className={`${styles.section6heading}`}>
                        After Subscribing
                      </h3>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center mt-4">
                    <Col xs={10}>
                      <ol className={`${styles.section6list}`}>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>
                          Nulla ac velit nec arcu sollicitudin lacinia eget eget
                          velit.
                        </li>
                        <li>
                          Praesent rutrum eros vitae libero fermentum, at
                          feugiat nisi scelerisque.
                        </li>
                        <li>
                          Etiam vel quam eget mi efficitur feugiat a eu metus.
                        </li>
                        <li>
                          Mauris sed ex id felis fermentum fermentum vel ut
                          nunc.
                        </li>
                      </ol>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ marginTop: "7rem", marginBottom: "5rem" }}>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center" xs={12}>
              <h1 style={{ fontWeight: "800" }}>Our Clients Feedback</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <TestimonialSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
