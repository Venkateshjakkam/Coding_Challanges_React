import React, { useState, useEffect } from "react";

const GridLightGreen = () => {
  const [cellStates, setCellStates] = useState(Array(9).fill("green"));
  const [updateCell, setUpdateCell] = useState([]);

  useEffect(() => {}, []);

  const handleColorChange = (index) => {
    setCellStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = newStates[index] === "green" ? "red" : "green";
      setUpdateCell(newStates);
      return newStates;
    });
  };

  const handleReset = (index) => {
    updateCell.map((item, i) => {
      <div></div>;
    });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "160px" }}>
      {cellStates.map((state, index) => (
        <div
          onClick={() => handleColorChange(index)}
          key={index}
          style={{
            width: "50px",
            height: "50px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: state,
            cursor: "pointer",
          }}
        >
          <p>{index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default GridLightGreen;
