import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalPortal from "../ModalPortal";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../redux/index";

function CorporateOfficesModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.corporateOfficesModal);

  const onHideHandler = () => {
    dispatch(modalActions.hideCorporateOfficesModal());
  };

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Corporate offices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Region</th>
          <th>City</th>
          <th>Country</th>
          <th>Postal Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Asia Pacific</td>
          <td>Dubai</td>
          <td>U.A.E</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>Europe</td>
          <td>Tallinn</td>
          <td>Estonia</td>
          <td>10111</td>
        </tr>
        <tr>
          <td>North America</td>
          <td>St. Port Louis</td>
          <td>Florida</td>
          <td>US</td>
        </tr>
      </tbody>
    </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHideHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalPortal>
  );
}

export default CorporateOfficesModal;
