import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./CustomDropdownDownload.module.css";

import AustraliaPdf from "../../assets/brochures/Australia.pdf";
import CanadaPdf from "../../assets/brochures/Canada.pdf";
import EuropePdf from "../../assets/brochures/Europe.pdf";
import HongKongPdf from "../../assets/brochures/HongKong.pdf";
import IndiaPdf from "../../assets/brochures/India.pdf";
import NewZealandPdf from "../../assets/brochures/NewZealand.pdf";
import SingaporePdf from "../../assets/brochures/Singapore.pdf";
import ThailandPdf from "../../assets/brochures/Thailand.pdf";
import UaePdf from "../../assets/brochures/Uae.pdf";
import UKPdf from "../../assets/brochures/UK.pdf";
import USAPdf from "../../assets/brochures/USA.pdf";

import EnterpriseAustraliaPdf from "../../assets/brochures/enterprise/Australia.pdf";
import EnterpriseCanadaPdf from "../../assets/brochures/enterprise/Canada.pdf";
import EnterpriseEuropePdf from "../../assets/brochures/enterprise/Europe.pdf";
import EnterpriseHongKongPdf from "../../assets/brochures/enterprise/hongKong.pdf";
import EnterpriseIndiaPdf from "../../assets/brochures/enterprise/India.pdf";
import EnterpriseSingaporePdf from "../../assets/brochures/enterprise/Singapore.pdf";
import EnterpriseThailandPdf from "../../assets/brochures/enterprise/Thailand.pdf";
import EnterpriseUaePdf from "../../assets/brochures/enterprise/UAE.pdf";
import EnterpriseUKPdf from "../../assets/brochures/enterprise/UK.pdf";
import EnterpriseUSAPdf from "../../assets/brochures/enterprise/USA.pdf";

const CustomDropdownDownload = ({ scrolled, isEnterprise }) => {
  const countries = [
    {
      title: "Asia Pacific",
      Countries: [
        { name: "India", pdf: IndiaPdf },
        { name: "Singapore", pdf: SingaporePdf },
        { name: "Thailand", pdf: ThailandPdf },
        { name: "Australia", pdf: AustraliaPdf },
        { name: "New Zealand", pdf: NewZealandPdf },
        { name: "Hong Kong", pdf: HongKongPdf },
        { name: "UAE", pdf: UaePdf },
      ],
    },
    {
      title: "Europe",
      Countries: [
        { name: "United Kingdom", pdf: UKPdf },
        { name: "Ireland", pdf: EuropePdf },
        { name: "Netherlands", pdf: EuropePdf },
        { name: "Italy", pdf: EuropePdf },
        { name: "Hungary", pdf: EuropePdf },
        { name: "Switzerland", pdf: EuropePdf },
        { name: "Germany", pdf: EuropePdf },
        { name: "Poland", pdf: EuropePdf },
        { name: "Sweden", pdf: EuropePdf },
        { name: "Denmark", pdf: EuropePdf },
        { name: "Belgium", pdf: EuropePdf },
        { name: "France", pdf: EuropePdf },
        { name: "Spain", pdf: EuropePdf },
        { name: "Portugal", pdf: EuropePdf },
      ],
    },
    {
      title: "North America",
      Countries: [
        { name: "Canada", pdf: CanadaPdf },
        { name: "United States of America", pdf: USAPdf },
      ],
    },
  ];

  const enterpriseCountries = [
    {
      title: "Asia Pacific",
      Countries: [
        { name: "India", pdf: EnterpriseIndiaPdf },
        { name: "Singapore", pdf: EnterpriseSingaporePdf },
        { name: "Thailand", pdf: EnterpriseThailandPdf },
        { name: "Australia", pdf: EnterpriseAustraliaPdf },
        { name: "Hong Kong", pdf: EnterpriseHongKongPdf },
        { name: "UAE", pdf: EnterpriseUaePdf },
      ],
    },
    {
      title: "Europe",
      Countries: [
        { name: "United Kingdom", pdf: EnterpriseUKPdf },
        { name: "Ireland", pdf: EnterpriseEuropePdf },
        { name: "Netherlands", pdf: EnterpriseEuropePdf },
        { name: "Italy", pdf: EnterpriseEuropePdf },
        { name: "Hungary", pdf: EnterpriseEuropePdf },
        { name: "Switzerland", pdf: EnterpriseEuropePdf },
        { name: "Germany", pdf: EnterpriseEuropePdf },
        { name: "Poland", pdf: EnterpriseEuropePdf },
        { name: "Sweden", pdf: EnterpriseEuropePdf },
        { name: "Denmark", pdf: EnterpriseEuropePdf },
        { name: "Belgium", pdf: EnterpriseEuropePdf },
        { name: "France", pdf: EnterpriseEuropePdf },
        { name: "Spain", pdf: EnterpriseEuropePdf },
        { name: "Portugal", pdf: EnterpriseEuropePdf },
      ],
    },
    {
      title: "North America",
      Countries: [
        { name: "Canada", pdf: EnterpriseCanadaPdf },
        { name: "United States of America", pdf: EnterpriseUSAPdf },
      ],
    },
  ];

  console.log(isEnterprise);

  const currCountries = isEnterprise ? enterpriseCountries : countries;

  const handleDownload = (pdfUrl, filename) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const title = "Download";
  return (
    <div
      className={`${
        scrolled ? styles.scrolledDropdown : styles.dropdown
      } d-flex justify-content-center`}
    >
      <button
        className={`${
          scrolled ? styles.scrolledDropdownButton : styles.dropdownButton
        }`}
      >
        <strong>{title}</strong>
      </button>
      <ul className={styles.dropdownMenu} style={{ padding: "0px" }}>
        <Container className={`${styles.containerWidth}`}>
          <Row>
            {currCountries.map((curr, index) => (
              <Col className="px-0" md={4} xs={4}>
                <li
                  style={{ width: "100%" }}
                  key={index}
                  className={`${styles.dropdownItem} d-flex justify-content-center`}
                >
                  <strong>{curr.title}</strong>
                </li>
                <div className={`${styles.scrollableContainer}`}>
                  {curr.Countries.map((country, index) => (
                    <li
                      key={index}
                      style={{ width: "100%" }}
                      className={`${styles.dropdownItem}`}
                      onClick={() => handleDownload(country.pdf, country.name)}
                    >
                      {country.name}
                    </li>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </ul>
    </div>
  );
};

export default CustomDropdownDownload;
