import React, { useState, useEffect } from "react";
import styles from "./WelcomeText.module.css";

const WelcomeText = ({ textArray, animationDelay }) => {
  const [currentText, setCurrentText] = useState(textArray[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, animationDelay);

    return () => clearInterval(intervalId);
  }, [textArray.length, animationDelay]);

  useEffect(() => {
    setCurrentText(textArray[index]);
  }, [index, textArray]);

  return (
    <h1
      key={currentText}
      className={`${styles.welcomeText} animate__animated animate__fadeInUp`}
      style={{ color: "#e07604" }}
    >
      {currentText}
    </h1>
  );
};

export default WelcomeText;
