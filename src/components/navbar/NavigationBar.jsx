import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logoImage from '../../assets/images/logoimage.png'

import styles from "./NavigationBar.module.css";
import CustomDropdown from "../CustomDropDown/CustomDropdown";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      className={`${
        scrolled ? styles.navbarCustomScrolled : styles.navbarCustom
      }`}
      expand="lg"
      variant={`${scrolled ? "light" : "dark"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand className={`${styles.navbarBrand}`} href="#home">
          <img src={logoImage} style={{ maxWidth: '12rem', maxHeight: '100%' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} className={styles.customToggler} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mx-auto">
            <CustomDropdown
              scrolled={scrolled}
              title="Home"
              options={["Option 1", "Option 2", "Option 3"]}
            />
            <CustomDropdown
              scrolled={scrolled}
              title="About"
              options={["Option 1", "Option 2", "Option 3"]}
            />
            <CustomDropdown
              scrolled={scrolled}
              title="Services"
              options={["Option 1", "Option 2", "Option 3"]}
            />
            <CustomDropdown
              scrolled={scrolled}
              title="Pages"
              options={["Option 1", "Option 2", "Option 3"]}
            />
            <CustomDropdown
              scrolled={scrolled}
              title="Contact Us"
              options={["Option 1", "Option 2", "Option 3"]}
            />
          </Nav>
          <Navbar.Text className={`${styles.phoneNumber}`}>
            Phone: 123-456-7890
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
