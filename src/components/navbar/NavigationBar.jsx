import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UseDispatch, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRepeat } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faThreads,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import logoImage from "../../assets/images/logoimage.png";

import styles from "./NavigationBar.module.css";
import CustomDropdown from "../CustomDropDown/CustomDropdown";
import CustomDropdownDownload from "../Download/CustomDropDownDownload";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

import { modalActions } from "../../redux";

const NavigationBar = ({ isEnterprise }) => {
  const dispatch = useDispatch();
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

  const handleSubscribeNowClick = () => {
    switch (isEnterprise) {
      case true:
        dispatch(modalActions.showSubscriptionFormModal());
        break;
    }
  };

  return (
    <Navbar
      className={`${scrolled ? styles.navbarCustomScrolled : styles.navbarCustom
        }`}
      expand="lg"
      variant={`${scrolled ? "light" : "dark"}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand className={`${styles.navbarBrand}`} href="#home">
          <img
            src={logoImage}
            style={{ maxWidth: "12rem", maxHeight: "100%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} className={styles.customToggler} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mx-auto">
            <div
              className={`d-flex justify-content-center px-2 mx-2 ${scrolled ? styles.scrolledNavItem : styles.navItem
                }`}
              style={{ padding: "10px" }}
              onClick={handleSubscribeNowClick}
            >
              Subscribe Now
            </div>
            <CustomDropdown
              scrolled={scrolled}
              title="Dashboard Login"
              options={["Partner Login", "User Login"]}
            />
            <CustomDropdownDownload
              scrolled={scrolled}
              title="Download"
              isEnterprise={isEnterprise}
            />
            <div
              className={`d-flex align-items-center justify-content-center px-2 mx-2 ${scrolled ? styles.scrolledNavItem : styles.navItem
                }`}
              style={{ padding: "10px" }}
            >
              Blogs
            </div>
            <Link
              to={isEnterprise ? "/" : '/enterprise'}
              className={`d-flex align-items-center justify-content-center px-2 mx-2 ${scrolled ? styles.scrolledNavItem : styles.navItem
                }`}
              style={{ padding: "10px" }}
            >
              <FontAwesomeIcon icon={faRepeat} />
            </Link>
          </Nav>
          <div>
            <FontAwesomeIcon
              className={`mx-2 ${styles.socialMediaIcons}`}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className={`mx-2 ${styles.socialMediaIcons}`}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className={`mx-2 ${styles.socialMediaIcons}`}
              icon={faThreads}
            />
            <FontAwesomeIcon
              className={`mx-2 ${styles.socialMediaIcons}`}
              icon={faFacebook}
            />
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
