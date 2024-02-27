import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleCheck,
  faLocationDot,
  faSquareCheck,
  faGlobe,
  faArrowLeft,
  faArrowRight,
  faArrowDownLong,
  faComputer,
  faCircleInfo,
  faCircleCheck,
  faEnvelope,
  faCreditCard,
  faUser,
  faTruck,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";

import mainVideo from "../../assets/videos/main.mp4";
import image7 from "../../assets/images/section3image1.jpg";

import styles from "./HomePage.module.css";
import ContactForm from "../../components/contactForm/ContactForm";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import Counter from "../../components/Counter/Counter";
import EnquiryForm from "../../components/enquiryForm/EnquiryForm";
import TestimonialSlider from "../../components/testimonials/Testimonials";
import ServicesSection from "../../components/servicesSection/ServicesSection";
import BenifitsTable from "../../components/BenifitsTable/BenifitsTable";
import FeaturesScroll from "../../components/featuresScroll/FeaturesScroll";

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
      const threshold = 2400;
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
            <Row className="mt-3">
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
            <Row className="mt-3">
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
            <Row className="mt-3">
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
                        <h1 className={`${styles.welcomeText}`}>Facility</h1>
                        <h1 className={`${styles.welcomeText}`}>Management</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={4}>
                      <Card className={`${styles.milestones}`}>
                        <Card.Body style={{ padding: "0px" }}>
                          <h1 className={`${styles.milestonesNumber}`}>
                            5000+
                          </h1>
                        </Card.Body>
                        <Card.Footer
                          style={{ padding: "0px" }}
                          className={`${styles.milestonesText}`}
                        >
                          Clients
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col xs={3}>
                      <Card className={`${styles.milestones}`}>
                        <Card.Body style={{ padding: "0px" }}>
                          <h1 className={`${styles.milestonesNumber}`}>300+</h1>
                        </Card.Body>
                        <Card.Footer
                          style={{ padding: "0px" }}
                          className={`${styles.milestonesText}`}
                        >
                          Team size
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col xs={5}>
                      <Card className={`${styles.milestones}`}>
                        <Card.Body style={{ padding: "0px" }}>
                          <h1
                            style={{ fontSize: "2.3rem" }}
                            className={`${styles.milestonesNumber}`}
                          >
                            Operations
                          </h1>
                        </Card.Body>
                        <Card.Footer
                          style={{ padding: "0px", marginTop: "0.rem" }}
                          className={`${styles.milestonesText}`}
                        >
                          Globally
                        </Card.Footer>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <ServicesSection />
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
                  src={image7}
                  className={`img-fluid ${styles.section3Image}`}
                />
              </div>
            </Col>
            <Col style={{ marginTop: "2rem" }} md={6}>
              <Container>
                <Row>
                  <h1 style={{ fontWeight: "800" }}>
                    The best Repair and Maintenance Company you’ll find.
                  </h1>
                </Row>
                <Row>
                  <p className={`${styles.section3paragraph}`}>
                    For Fix Tech, use - We take all the repair and maintenance
                    struggle away from you. All you have to do is rest while we
                    do the work!
                  </p>
                </Row>
                <Row style={{ marginTop: "1rem" }}>
                  <Col md={6}>
                    <FontAwesomeIcon
                      className={`${styles.section3icons}`}
                      icon={faSquareCheck}
                    />
                    <h3 className={`${styles.section3subHeading}`}>
                      5+ Years of Business Experience
                    </h3>
                  </Col>
                  <Col md={6}>
                    <FontAwesomeIcon
                      className={`${styles.section3icons}`}
                      icon={faHouseCircleCheck}
                    />
                    <h3 className={`${styles.section3subHeading}`}>
                      Operate Globally.
                    </h3>
                    <p>Wherever you are in the World, we can serve you. </p>
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
            <Col md={5}>
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
            <Col md={7}>
              <BenifitsTable />
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
                  <Row className="mt-4">
                    <Container>
                      <Row className="mt-4">
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                style={{ color: "#042963" }}
                                icon={faGlobe}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                visit fixtechcare.com
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={4}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faComputer}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Go through with the platform
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                style={{ color: "#f04816" }}
                                icon={faCircleInfo}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Fill the subscription form
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col xs={9}></Col>
                        <Col className="d-flex justify-content-center" xs={3}>
                          <FontAwesomeIcon
                            icon={faArrowDownLong}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-5">
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                style={{ color: "#0a9603" }}
                                icon={faCircleCheck}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Your account is activated
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={4}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faEnvelope}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Check mail
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faCreditCard}
                                style={{ color: "#f0d330" }}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Make payment
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
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
                  <Row className="mt-4">
                    <Container>
                      <Row className="mt-4">
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                style={{ color: "#0a9603" }}
                                icon={faUser}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Login to dashboard
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={4}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faComputer}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Go through all features
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                style={{ color: "#d69004" }}
                                icon={faTruck}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Service request
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col xs={9}></Col>
                        <Col className="d-flex justify-content-center" xs={3}>
                          <FontAwesomeIcon
                            icon={faArrowDownLong}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-5">
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                style={{ color: "#0a9603" }}
                                icon={faCircleCheck}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Submit feedback form
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={4}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faUserNurse}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Technician will complete the task{" "}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="d-flex align-items-center" xs={1}>
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={`${styles.subscriptionIcons}`}
                          />
                        </Col>
                        <Col xs={3}>
                          <Card style={{ border: "none" }}>
                            <Card.Title className="d-flex justify-content-center">
                              <FontAwesomeIcon
                                icon={faLocationDot}
                                style={{ color: "#f0d330" }}
                                className={`${styles.subscriptionIcons}`}
                              />
                            </Card.Title>
                            <Card.Body className="d-flex justify-content-center text-center">
                              <p className={`${styles.subscriptionText}`}>
                                Track engineer live
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </section>

      <section style={{ marginTop: "8rem" }}>
        <Container>
          <Row>
            <Col md={12}>
              <div
                style={{ marginBottom: "5rem" }}
                className="col-md-12 d-flex justify-content-center align-items-center"
              >
                <h1 style={{ fontWeight: "800" }}>Features</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FeaturesScroll />
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
