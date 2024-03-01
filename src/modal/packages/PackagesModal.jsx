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
          <Modal.Header closeButton>
            <Modal.Title>All solutions package.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className={styles.table}> {/* Apply CSS class */}
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
