import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleCheck,
  faLocationDot,
  faSquareCheck,
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
import Locations from "../../components/Locations/Locations";
import SubscriptionSection from "../../components/subscriptionSection/SubscriptionSection";
import { modalActions } from "../../redux";

function HomePage() {
  const welcomeTextValue = [
    "Electronics Maintenance",
    "Plumbing Maintenance",
    "Computer Maintenance",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(modalActions.showWelcomeModal());
    }, 10 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const asiaPacificCountries = [
    "Thailand",
    "Singapore",
    "India",
    "Hong Kong",
    "UAE",
  ];

  const europeCountries = [
    "Germany",
    "France",
    "United Kingdom",
    "Italy",
    "Spain",
    "Ireland",
    "Netherland",
    "Hungary",
    "Switzerland",
    "Poland",
    "Sweden",
    "Denmark",
    "Belgium",
    "Portugal",
  ];

  const northAmericaCountries = ["USA", "Canada"];

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

      {/* <section style={{ marginTop: "3rem" }}>
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
      </section> */}

      <section style={{ marginTop: "8rem" }}>
        <Container>
          <Row>
            <Col md={5}>
              <Locations />
            </Col>
            <Col md={7}>
              <BenifitsTable />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ marginTop: "4rem" }}>
        <SubscriptionSection />
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
