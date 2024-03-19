import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import styles from "./ServicesSection.module.css";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../redux/index";

import image1 from "../../assets/images/section2electrical.jpg";
import image2 from "../../assets/images/section2plumbing.jpg";
import image3 from "../../assets/images/section2computer.jpg";
import image4 from "../../assets/images/section2carpenter.jpg";
import image5 from "../../assets/images/section2cleaning.jpg";
import image6 from "../../assets/images/section2Premise.jpg";

function ServicesSection() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLearnMoreClick = (serviceId) => {
    dispatch(modalActions.showServicesModal({ serviceId: serviceId }));
  };
  return (
    <Container>
      <Row className="d-flex text-center">
        <h1 style={{ fontWeight: "800" }}>Our Services</h1>
      </Row>
      <Row>
        <Col style={{ marginTop: "2rem" }} md={4}>
          <div className={styles.imageContainer}>
            <div className={`${styles.imageOverlay} px-4`}>
              <span>
                <h1 className={styles.overlayHeading}>
                  Electronics Maintenance
                </h1>
                <p className={styles.overlayContent}>
                  Electrical & Electronics Maintenance refers to the ongoing
                  care and upkeep of electrical systems and equipment in
                  residential, commercial, and industrial settings. Electrical
                  maintenance services are important for ensuring the safe and
                  reliable operation of electrical systems and equipment,
                  reducing the risk of electrical hazards, and minimizing
                  {/* downtime due to equipment failures. These services are
                  performed on a regular basis or as needed based on the
                  specific needs of the electrical system or equipment. */}
                </p>
                <button
                  className={styles.overlayButton}
                  onClick={() => handleLearnMoreClick(1)}
                >
                  Learn More
                </button>
              </span>
            </div>
            <Image src={image1} fluid className={styles.image} />
          </div>
        </Col>
        <Col style={{ marginTop: "2rem" }} md={4}>
          <div className={styles.imageContainer}>
            <div className={`${styles.imageOverlay} px-4`}>
              <span>
                <h1 className={styles.overlayHeading}>Plumbing Maintenance</h1>
                <p className={styles.overlayContent}>
                  Plumbing Maintenance refer to the regular upkeep and repair of
                  plumbing systems in residential, commercial, and industrial
                  properties. Plumbing maintenance services entail a wide range
                  of tasks, such as checking and tightening fittings and
                  connections, inspecting and repairing pipes, replacing
                  worn-out fixtures, and ensuring proper ventilation and
                  drainage.
                  {/*Regular maintenance can help prevent major plumbing
                  problems, increase the lifespan of plumbing systems, and
                  improve the overall safety and health of occupants. */}
                </p>
                <button
                  className={styles.overlayButton}
                  onClick={() => handleLearnMoreClick(2)}
                >
                  Learn More
                </button>
              </span>
            </div>
            <Image src={image2} fluid className={styles.image} />
          </div>
        </Col>
        <Col style={{ marginTop: "2rem" }} md={4}>
          <div className={styles.imageContainer}>
            <div className={`${styles.imageOverlay} px-4`}>
              <span>
                <h1 className={styles.overlayHeading}>Computer Maintenance</h1>
                <p className={styles.overlayContent}>
                  Computer System Maintenance refer to the ongoing support and
                  upkeep of computer systems in an organization. These services
                  cover a wide range of activities, including hardware repair
                  and replacement, software updates and patches, security checks
                  and maintenance, data backups and restoration, and overall
                  system optimization and performance enhancement.
                </p>
                <button
                  className={styles.overlayButton}
                  onClick={() => handleLearnMoreClick(3)}
                >
                  Learn More
                </button>
              </span>
            </div>
            <Image src={image3} fluid className={styles.image} />
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col style={{ marginTop: "2rem" }} md={4}>
          <div className={styles.imageContainer2}>
            <div className={`${styles.imageOverlay} px-4`}>
              <span>
                <h1 className={styles.overlayHeading}>Carpenter Services</h1>
                <p className={styles.overlayContent}>
                  Carpenter Services refer to the regular upkeep and repair of
                  wooden structures, furniture, and fixtures in residential,
                  commercial, and industrial properties. Regular maintenance of
                  wooden structures is important to prevent wear and tear, and
                  deterioration due to weather, pests, and other factors.
                  {/* Carpenter maintenance services can also help increase the
                  lifespan of wooden structures and fixtures, maintain their
                  appearance and functionality, and improve the safety and
                  comfort. */}
                </p>
                <button
                  className={styles.overlayButton}
                  onClick={() => handleLearnMoreClick(4)}
                >
                  Learn More
                </button>
              </span>
            </div>
            <Image src={image4} fluid className={styles.image} />
          </div>
        </Col>
        <Col style={{ marginTop: "2rem" }} md={4}>
          <div className={styles.imageContainer2}>
            <div className={`${styles.imageOverlay} px-4`}>
              <span>
                <h1 className={styles.overlayHeading}>Cleaning Solutions</h1>
                <p className={styles.overlayContent}>
                  Cleaning Solutions refer to the ongoing care and upkeep of
                  indoor spaces, such as homes, offices, commercial buildings,
                  and other facilities. Cleaning maintenance services are
                  important for maintaining a clean and healthy indoor
                  environment, promoting the well-being of occupants, and
                  ensuring that indoor spaces remain safe and enjoyable to use.
                  {/* These services can be performed on a regular basis, such as
                  daily or weekly, or as needed based on the specific needs of
                  the indoor space. */}
                </p>
                <button
                  className={styles.overlayButton}
                  onClick={() => handleLearnMoreClick(5)}
                >
                  Learn More
                </button>
              </span>
            </div>
            <Image src={image5} fluid className={styles.image} />
          </div>
        </Col>
        {location.pathname.startsWith("/enterprise") ? (
          <Col style={{ marginTop: "2rem" }} md={4}>
            <div className={styles.imageContainer2}>
              <div className={`${styles.imageOverlay} px-4`}>
                <span>
                  <h1 className={styles.overlayHeading}>
                    Landscaping Solutions
                  </h1>
                  <p className={styles.overlayContent}>
                    Landscaping Services refer to the ongoing care and upkeep of
                    outdoor spaces, such as residential or commercial lawns,
                    gardens, parks, and other outdoor areas. Landscaping
                    maintenance services are important for maintaining the
                    health and appearance of outdoor spaces, promoting the
                    growth of plants and grass, preventing damage from pests and
                    {/* disease, and ensuring that outdoor areas remain safe and
                    enjoyable for people to use. These services can be performed
                    on a regular basis, such as weekly or monthly, or as needed
                    based on the specific needs of the outdoor space. */}
                  </p>
                  <button
                    className={styles.overlayButton}
                    onClick={() => handleLearnMoreClick(7)}
                  >
                    Learn More
                  </button>
                </span>
              </div>
              <Image src={image6} fluid className={styles.image} />
            </div>
          </Col>
        ) : (
          <Col style={{ marginTop: "2rem" }} md={4}>
            <div className={styles.imageContainer2}>
              <div className={`${styles.imageOverlay} px-4`}>
                <span>
                  <h1 className={styles.overlayHeading}>Premises Review</h1>
                  <p className={styles.overlayContent}>
                    Refers to the assessment of the maintenance status of a
                    property by a Facility Management Manager
                    {/*These services can be
                  performed on a regular basis, such as weekly or monthly, or as
                  needed based on the specific needs of the outdoor space. */}
                  </p>
                  <button
                    className={styles.overlayButton}
                    onClick={() => handleLearnMoreClick(6)}
                  >
                    Learn More
                  </button>
                </span>
              </div>
              <Image src={image6} fluid className={styles.image} />
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ServicesSection;
