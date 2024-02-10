// Counter.js
import React, { useState, useEffect } from "react";

const Counter = ({ finalValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementInterval = duration / finalValue;
    let tempValue = 0;
    const interval = setInterval(() => {
      tempValue++;
      setCount(tempValue);
      if (tempValue === finalValue) {
        clearInterval(interval);
      }
    }, incrementInterval);

    return () => clearInterval(interval);
  }, [finalValue, duration]);

  return <>{count}</>;
};

export default Counter;
