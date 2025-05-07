import { useState } from "react";
import "./Style.css";

export default function App() {
  const totalBoxes = 25;
  const [selectedBoxIndex, setSelectedBoxIndex] = useState("");
  const [coloredBoxes, setColoredBoxes] = useState(Array(totalBoxes).fill(""));

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedBoxIndex(value);

    if (value === "") {
      setColoredBoxes(Array(totalBoxes).fill(""));
    }
  };

  const applyColor = () => {
    const index = parseInt(selectedBoxIndex) - 1;
    if (isNaN(index) || index < 0 || index >= totalBoxes) return;

    const updatedColors = [...coloredBoxes];
    updatedColors[index] = updatedColors[index] === "red" ? "" : "red";
    setColoredBoxes(updatedColors);
  };

  const clearAll = () => {
    setSelectedBoxIndex("");
    setColoredBoxes(Array(totalBoxes).fill(""));
  };

  return (
    <div className="App">
      <input
        type="number"
        value={selectedBoxIndex}
        onChange={handleInputChange}
        placeholder="Enter box number (1-25)"
      />
      <button onClick={applyColor}>
        {coloredBoxes[selectedBoxIndex - 1] ? "Clear Me" : "Color Me"}
      </button>
      <button onClick={clearAll}>Clear All</button>

      <div className="mainBox">
        {coloredBoxes.map((color, index) => (
          <div
            key={index}
            className="divBox"
            style={{ backgroundColor: color }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
