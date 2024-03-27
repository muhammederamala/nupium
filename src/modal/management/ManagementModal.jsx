import React, { useRef } from "react";
import { Modal, Button, Row, Container, Col } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/index";

import styles from './ManagementModal.module.css'

import glickmanJpg from "../../assets/images/management/managementGlickman.jpg";
import giovannaJpg from '../../assets/images/management/managementGiovanna.jpg';

function ManagementModal() {
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.modal.managementModal);

    const onHideHandler = () => {
        dispatch(modalActions.hideManagementModal());
    };

    return (
        <ModalPortal>
            <Modal show={showModal} onHide={onHideHandler} size="lg">
                <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Meet the Founders</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <img src={glickmanJpg} className="img-fluid" />
                                </Col>
                                <Col md={8}>
                                    <Container>
                                        <Row>
                                            <Col md={12}>
                                                <h3 className={`${styles.name}`}>Michael A. Glickman</h3>
                                                <p className={`${styles.paragraph}`} style={{ marginTop: "1rem" }}>As a visionary leader, Michael A. Glickman is a seasoned executive with a proven
                                                    track record of driving innovation, growth, and sustainable success in the
                                                    multiple business sectors. With an unwavering commitment to excellence and a
                                                    passion for transformative leadership, Michael brings a wealth of experience to
                                                    the executive team</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col md={12}>
                                    <h5 className={`${styles.heading}`}>Professional Background:</h5>
                                    <p className={`${styles.paragraph}`} >Michael boasts a distinguished career marked by over 25 years of executive
                                        leadership in various industries. Prior to assuming the Co-Founder role at
                                        FixTech Care, he held several key leadership positions, including VP of Sales &
                                        Marketing and Senior management roles with both domestic and internationally
                                        recognized firms. He has consistently demonstrated a keen ability to navigate
                                        complex business landscapes, fostering organizational agility and resilience</p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <h5 className={`${styles.heading}`}>Strategic Vision:</h5>
                                    <p className={`${styles.paragraph}`} >
                                        Known for his strategic foresight, Michael has been instrumental in shaping the
                                        trajectory of FixTech Care through forward-thinking initiatives and cutting-edge
                                        strategies. He has a deep understanding of market trends, emerging
                                        technologies, and customer dynamics, driving the company towards sustainable
                                        growth
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <h5 className={`${styles.heading}`}>Leadership Style:</h5>
                                    <p className={`${styles.paragraph}`} >
                                        Michael's leadership style is characterized by a collaborative approach, fostering
                                        a culture of innovation, inclusivity, and continuous improvement. He empowers
                                        teams to embrace creativity and challenges the status quo, driving a culture of
                                        excellence that permeates every aspect of FixTech Care's operations.
                                    </p>
                                    <p className={`${styles.paragraph}`} >
                                        As the driving force behind FixTech Care's success, Michael continues to lead
                                        the charge towards a future of innovation, growth, and unparalleled excellence
                                        in the service sector.
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col md={3}>
                                    <img src={giovannaJpg} className="img-fluid" />
                                </Col>
                                <Col md={8}>
                                    <Container>
                                        <Row>
                                            <Col md={12}>
                                                <h3 className={`${styles.name}`}>Ms. Giovanna G.</h3>
                                                <p className={`${styles.paragraph}`} style={{ marginTop: "1rem" }}>As a visionary leader, Michael A. Glickman is a seasoned executive with a proven
                                                    Giovanna Garcia is a highly accomplished woman in the realm of commercial partnerships,
                                                    focused on fostering relationships that generate dual-benefit outcomes for various
                                                    companies, with a commitment to steering us towards sustainable success.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className={`${styles.paragraph}`} >
                                        Focused on
                                        strategic development of partner channels and possessing an innate passion for forging
                                        solid, mutually beneficial relationships, Giovanna Garcia is a visionary leader in the field of
                                        business alliances. With over 9 years of experience in the [specific industry], she has
                                        consistently demonstrated her ability to drive business growth through strategic
                                        collaborations and effective partner management.

                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col md={12}>
                                    <h5 className={`${styles.heading}`}>Professional Background:</h5>
                                    <p className={`${styles.paragraph}`} >
                                        Giovanna Garcia boasts a proven 9-year track record in the realm of commercial
                                        partnerships, having held various positions ranging from business exchanges to partner
                                        channel management, successfully spearheading international partner expansion programs.
                                        Her customer-centric approach and knack for identifying collaboration opportunities have
                                        been foundational pillars in her career.

                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <h5 className={`${styles.heading}`}>Strategic Vision:</h5>
                                    <p className={`${styles.paragraph}`} >
                                        Giovanna Garcia's strategic vision for a Partner Channel is centered around establishing and
                                        managing solid, mutually beneficial relationships with commercial partners to drive business
                                        growth. Focused on creating new alliances, developing mutually beneficial programs, and
                                        managing relationships, she is deeply motivated by market innovation and the pursuit of
                                        opportunities for mutual value creation.
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <h5 className={`${styles.heading}`}>Leadership Style:</h5>
                                    <p className={`${styles.paragraph}`} >
                                        Her leadership style is characterized by a collaborative, empathetic, results-oriented, and
                                        innovative approach. She is keenly interested in continual self-development and adapting to
                                        change
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHideHandler}>
                            Close
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </ModalPortal>
    );
}

export default ManagementModal;
