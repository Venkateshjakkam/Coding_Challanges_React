import React, { useState, useRef, useEffect } from "react";
import "./OTPPage.css";

const OTP_DIGITS_COUNT = 6;

const OTPPage = () => {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      <h3>OTPPage Validation</h3>
      {inputArr.map((item, index) => (
        <input
          ref={(input) => (refArr.current[index] = input)}
          key={index}
          className="otp-input"
          type="text"
          value={inputArr[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPPage;
