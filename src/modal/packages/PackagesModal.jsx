import React from "react";
import { Modal, Button } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../redux/index";
import styles from "./PackagesModal.module.css"; // Import CSS module

function PackagesModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.packagesModal);

  const onHideHandler = () => {
    dispatch(modalActions.hidePackagesModal());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="lg">
        <div className={styles["table-container"]}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h4>Enterprise Model</h4>
            <h6 className="mt-4">All solutions package</h6>
            <table className={`${styles.table} mt-3`}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Standard [Monthly]</th>
                  <th>Growth [Monthly]</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3">
                    <strong>Asia Region</strong>
                  </td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>INR 3,20,000</td>
                  <td>INR 6,40,000</td>
                </tr>
                <tr>
                  <td>Thailand</td>
                  <td>Thai B. 5,40,000</td>
                  <td>Thai B. 10,80,000</td>
                </tr>
                <tr>
                  <td>Singapore</td>
                  <td>SGD$ 29000</td>
                  <td>SGD$ 58000</td>
                </tr>
                <tr>
                  <td>Hong Kong</td>
                  <td>HK$ 3,60,000</td>
                  <td>HK$ 7,20,000</td>
                </tr>
                <tr>
                  <td>United Arab Emirates</td>
                  <td>Dirham 38000</td>
                  <td>Dirham 76000</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <strong>Europe Region</strong>
                  </td>
                </tr>
                <tr>
                  <td>Europe Union Nations</td>
                  <td>Euro 33500</td>
                  <td>Euro 67000</td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>GBP 33000</td>
                  <td>GBP 66000</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <strong>North America Region</strong>
                  </td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>CAD 43000</td>
                  <td>CAD 86000</td>
                </tr>
                <tr>
                  <td>United States</td>
                  <td>US$ 45000</td>
                  <td>US$ 90000</td>
                </tr>
              </tbody>
            </table>
            <h6 className="mt-5">As per services package</h6>
            <table className={`${styles.table} mt-4`}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Type of Services</th>
                  <th>Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Asia region</strong>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="6">India</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>INR 50000</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>INR 50000</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>INR 70000</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>INR 50000</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>INR 60000</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>INR 60000</td>
                </tr>
                <tr>
                  <td rowSpan="6">Thailand</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>Thai B. 100000</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>Thai B. 100000</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>Thai B. 115000</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>Thai B. 100000</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>Thai B. 85000</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>Thai B. 85000</td>
                </tr>
                <tr>
                  <td rowSpan="6">Singapore</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>SGD$ 5000</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>SGD$ 5000</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>SGD$ 6500</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>SGD$ 5000</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>SGD$ 5500</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>SGD$ 5500</td>
                </tr>
                <tr>
                  <td rowSpan="6">Hong Kong</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>HK$ 70000</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>HK$ 70000</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>HK$ 90000</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>HK$ 70000</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>HK$ 60000</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>HK$ 60000</td>
                </tr>
                <tr>
                  <td rowSpan="6">UAE</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>Dirham 6500</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>Dirham 6500</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>Dirham 8500</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>Dirham 6500</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>Dirham 7500</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>Dirham 7500</td>
                </tr>
                <tr>
                  <td>
                    <strong>Europe Region</strong>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="6">Europe Union Nations</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>Euro 5400</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>Euro 5400</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>Euro 6900</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>Euro 5400</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>Euro 6400</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>Euro 5900</td>
                </tr>
                <tr>
                  <td rowSpan="6">United Kingdom</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>GBP 4900</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>GBP 4900</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>GBP 6900</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>GBP 4900</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>GBP 6500</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>GBP 6000</td>
                </tr>
                <tr>
                  <td>Switzerland</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Denmark</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hungary</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Poland</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>North America Region</strong>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="6">Canada</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>CAD 6900</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>CAD 6900</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>CAD 6900</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>CAD 8900</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>CAD 7900</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>CAD 7900</td>
                </tr>
                <tr>
                  <td rowSpan="6">United States</td>
                  <td>Electrical & Electronics Maintenance</td>
                  <td>US$ 7000</td>
                </tr>
                <tr>
                  <td>Plumbing Maintenance</td>
                  <td>US$ 7000</td>
                </tr>
                <tr>
                  <td>Computer System Maintenance</td>
                  <td>US$ 7000</td>
                </tr>
                <tr>
                  <td>Carpenter Services</td>
                  <td>US$ 9000</td>
                </tr>
                <tr>
                  <td>Cleaning Solutions</td>
                  <td>US$ 9000</td>
                </tr>
                <tr>
                  <td>Landscaping Services</td>
                  <td>US$ 9000</td>
                </tr>
              </tbody>
            </table>
            <h4 className="mt-5">Individual Sales Model</h4>
            <table className={`${styles.table} mt-4`}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Package Cost [Yearly]</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Asia Region</strong>
                  </td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>INR 9999</td>
                </tr>
                <tr>
                  <td>Turkey</td>
                  <td>TRY 7499</td>
                </tr>
                <tr>
                  <td>Thailand</td>
                  <td>Thai B. 17500</td>
                </tr>
                <tr>
                  <td>Singapore</td>
                  <td>SGD$ 1099</td>
                </tr>
                <tr>
                  <td>Hong Kong</td>
                  <td>HK$ 6900</td>
                </tr>
                <tr>
                  <td>United Arab Emirates</td>
                  <td>Dirham 4900</td>
                </tr>
                <tr>
                  <td>
                    <strong>Europe Region</strong>
                  </td>
                </tr>
                <tr>
                  <td>Europe Union Nations</td>
                  <td>Euro 950</td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>GBP 900</td>
                </tr>
                <tr>
                  <td>Switzerland</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Denmark</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Hungary</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Poland</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Czech Republic</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Norway</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Serbia</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Romania</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>
                    <strong>North America Region</strong>
                  </td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>CAD 1200</td>
                </tr>
                <tr>
                  <td>United States</td>
                  <td>US$ 1350</td>
                </tr>
              </tbody>
            </table>
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

export default PackagesModal;
