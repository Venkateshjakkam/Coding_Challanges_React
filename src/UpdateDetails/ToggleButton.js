import React, { useState } from "react";

const ToggleButton = () => {
  // State to track button status
  const [isOn, setIsOn] = useState(false); ;

  // Toggle function
  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
