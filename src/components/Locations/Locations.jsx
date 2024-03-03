import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import scrollbarStyles from "./Scrollbar.module.css";
import styles from "./Scrollbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Locations() {
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
    <Container>
      <Row>
        <h1 className={`${styles.section5locationHeading}`}>Locations</h1>
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
        <Col xs={3}>
          <button
            className={`${styles.section5countriesButton}`}
            onClick={() => handleButtonClick("Europe")}
          >
            Europe
          </button>
        </Col>
        <Col xs={5}>
          <button
            className={`${styles.section5countriesButton}`}
            onClick={() => handleButtonClick("North America")}
          >
            North America
          </button>
        </Col>
      </Row>
      <Row
        className={`${scrollbarStyles.scrollbarContainer} mt-3`}
        style={{
          maxHeight: "50vh",
          overflowY: "auto",
        }}
      >
        <h4 style={{ fontWeight: "800" }}>Our facilities</h4>
        <ul style={{ listStyleType: "none" }}>{renderCountries()}</ul>
      </Row>
    </Container>
  );
}

export default Locations;
