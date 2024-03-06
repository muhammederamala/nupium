import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalPortal from "../ModalPortal";
// import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { modalActions } from "../../redux/index";

function DeleteSubjectModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.servicesModal);
  const serviceId = useSelector((state) => state.modal.serviceId);

  const [selectedService, setSelectedService] = useState([]);

  const onHideHandler = () => {
    dispatch(modalActions.hideServicesModal());
  };

  const serviceContent = [
    {
      serviceId: "1",
      serviceContent: [
        "Switchbox Installation (Any type)",
        "Switchboard Repairing",
        "Switch & Socket Repairing",
        "Fan (Ceiling/Standing/Wall) Installation, Repairing",
        "Lights Installation wall, ceiling (Any type)",
        "MCB Installation, Meter Installation, Circuit Repairing",
        "Power House Maintenance & Servicing",
        "Wiring (Internal/Outer), Casing (Shot Repair & New Installing)",
        "Drill Holes",
        "Electronics Appliances Repairing & Installation",
      ],
    },
    {
      serviceId: "2",
      serviceContent: [
        "Leakage Repairing",
        "Washbasin Installation & Repairing",
        "Waste Pipe Installation",
        "Bathroom Accessories Installation/Repairing",
        "Bath Fitting Installation",
        "Water Pipe Blockage Repairing",
        "Drainage Pipe Installation/Repairing",
        "Commode Installation/Part Changing",
        "Tap Installation & Repair (Any type)",
        "Toilet Seat Accessories Replacement (Any type)",
        "Water Tank Installation/ Leakage Repair",
        "Water Motor Servicing/ Installation/Changing",
        "Any kind of Product Installation or servicing or maintenance",
      ],
    },
    {
      serviceId: "3",
      serviceContent: [
        "Computer or Desktop deployment, relocation and setup",
        "Virus and spyware removal & malicious software prevention",
        "Hardware Installations, & upgrading memory, hard drives, SSD’s video cards, disc drives etc",
        "Computer peripheral installation, configuration and networking, including printers",
        "Network design and configuration",
        "Software installation & upgrades, such as operating system & database applications",
        "Troubleshooting & repairing of internet access connection issues",
        "Router and firewall installation configuration, & troubleshooting",
        "Email and messaging configuration and support",
        "Data backup & recovery solutions",
        "Password recovery services",
      ],
    },
    {
      serviceId: "4",
      serviceContent: [
        "Curtain & Blinds Installation/Repairing",
        "Doors & Window Installation/Repairing",
        "Locks & Handle Installation/Replacement",
        "All kinds of Drawer & Shelf Repairing",
        "Furniture  Installation & Repairing",
        "Furniture Assembling (Any type)",
        "Furniture Dismantle",
        "Any type of accessories, product Replacement/Repairing/Installation",
        "Custom Building of any product",
        "Sunmica Sheet Replacement/ Installation",
        "Plywood/Blockboard Installation",
        "Any kind of repairing as per carpenter related tasks",
      ],
    },
    {
      serviceId: "5",
      serviceContent: [
        "Premises review by Facility Management Manager",
        "Helping to change parts or and to make decisions about condition of premises maintenance status",
        "Drafting reports and share it with the owner or any representative other of the premises",
        "Advising on increasing efficiency and cost effectiveness",
        "Supervising multi-disciplinary services team that service as per standard of the premises",
        "Ensuring that facilities such as electrical, plumbing, computers, and others are well maintained or not, if not then give consulting about to make changes",
        "Review of premises is just like you do your health checkups, its check-up of your premises maintenance condition",
      ],
    },
    {
      serviceId: "6",
      serviceContent: [
        "Premises review by Facility Management Manager ",
        "Helping to change parts or and to make decisions about condition of premises maintenance status",
        "Drafting reports and share it with the owner or any representative other of the premises",
        "Advising on increasing efficiency and cost effectiveness",
        "Supervising multi-disciplinary services team that service as per standard of the premises",
        "Ensuring that facilities such as electrical, plumbing, computers, and others are well maintained or not, if not then give consulting about to make changes",
        "Review of premises is just like you do your health checkups, its check-up of your premises maintenance condition",
      ],
    },
  ];

  useEffect(() => {
    const filtered = serviceContent.filter(
      (service) => service.serviceId == serviceId
    );
    setSelectedService(filtered);
  }, [serviceId]);

  return (
    <ModalPortal>
      <Modal show={showModal} onHide={onHideHandler} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Services Offered</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {selectedService.map((service) =>
              service.serviceContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))
            )}
          </ul>
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

export default DeleteSubjectModal;
