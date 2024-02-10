import React from "react";
import styles from "./CustomDropdown.module.css";

const CustomDropdown = ({ scrolled, title, options }) => {
  return (
    <div className={`${scrolled ? styles.scrolledDropdown : styles.dropdown} d-flex justify-content-center`}>
      <button
        className={`${
          scrolled ? styles.scrolledDropdownButton : styles.dropdownButton
        }`}
      >
        <strong>{title}</strong>
      </button>
      <ul className={styles.dropdownMenu} style={{ padding: "0px" }}>
        {options.map((option, index) => (
          <li
            style={{ width: "100%" }}
            key={index}
            className={`${styles.dropdownItem} d-flex justify-content-center`}
          >
            <strong>{option}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;
