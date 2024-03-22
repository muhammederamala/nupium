import React from "react";

import styles from "./EnterprisePackages.module.css";
import { Container, Row, Col } from "react-bootstrap";

const EnterprisePackages = () => {
  return (
    <Container>
      <Row>
        <div className="container mt-3">
          <h2 className="mb-3" style={{ fontWeight: "800" }}>
            Options to Choose from multiple models for your Enterprise:
          </h2>
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th className={styles.tableHeader}>Options</th>
                <th className={styles.tableHeader}>Packages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-3">
                <td rowSpan={2}>Packages with all Services</td>
                <td>Package Standard</td>
              </tr>
              <tr>
                <td>Package Growth</td>
              </tr>
              <tr className="py-3">
                <td>Custom Package as per Services</td>
                <td>
                  Design custom contract by selecting the services as per need
                  of your business
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
      <Row className="mt-4 text-center">
        <h5>
          PROFFESSIONAL ENGINEERS AND TECHNICIANS, ALL EXPERT IN THEIR BUSINESS
          IS ONLY SECONDS AWAY FROM YOU
        </h5>
      </Row>
    </Container>
  );
};

export default EnterprisePackages;
