import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import GoogleTranslateWidget from "../../utility/googletranslatewidget/GoogleTranslateWidget";

import styles from "./LanguageSelector.module.css";

function LanguageSelector() {
  return (
    <>
      <span className={`${styles.languageIconContainer}`}>
        <FontAwesomeIcon
          className={`mx-2 ${styles.languageIcon}`}
          icon={faLanguage}
        />
        <div className={`${styles.languageDropDown}`}>
          <GoogleTranslateWidget styles={{ width: "50px" }} />
        </div>
      </span>
    </>
  );
}

export default LanguageSelector;
