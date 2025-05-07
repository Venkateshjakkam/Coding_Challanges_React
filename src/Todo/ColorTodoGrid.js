import { useState } from "react";
import "./Style.css";

export default function App() {
  const totalBoxes = 25;

  const [inputValue, setInputValue] = useState("");
  const [colorState, setColorState] = useState(false);
  const [coloredBoxes, setColoredBoxes] = useState(Array(totalBoxes).fill(""));
  const [previousColors, setPreviousColors] = useState(
    Array(totalBoxes).fill("")
  );
  const [activeIndexes, setActiveIndexes] = useState([]);

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value > 25) {
      setError("Please enter the value in between 1-25 only");
    }
    if (e.target.value === "") {
      setColorState(false);
    }
  };

  const handleColorChange = () => {
    const index = parseInt(inputValue) - 1;
    if (isNaN(index) || index < 0 || index >= totalBoxes) return;

    setColorState(true);
    setPreviousColors((prev) => {
      const updated = [...prev];
      updated[index] = coloredBoxes[index];
      return updated;
    });

    setColoredBoxes((prev) => {
      const updated = [...prev];
      updated[index] = "red";
      return updated;
    });

    setActiveIndexes((prev) => {
      const filtered = prev.filter((i) => i !== index);
      const newList = [...filtered, index];

      if (newList.length > 2) {
        const [removedIndex, ...rest] = newList;

        setColoredBoxes((prev) => {
          const updated = [...prev];
          updated[removedIndex] = "";
          return updated;
        });
        return rest;
      }
      return newList;
    });
  };

  const clearMe = () => {
    setInputValue("");
    setColorState(false);
  };

  const handleClearAll = () => {
    setInputValue("");
    setPreviousColors([...coloredBoxes]);
    setColoredBoxes(Array(totalBoxes).fill(""));
    setActiveIndexes([]);
  };

  return (
    <div className="App">
      <input value={inputValue} onChange={handleInputChange} />

      {colorState ? (
        <button onClick={clearMe}>Clear Me</button>
      ) : (
        <button onClick={handleColorChange}>Color Me</button>
      )}
      <button onClick={handleClearAll}>Clear All</button>
      <span style={{ display: "block" }}>{error}</span>
      <div className="mainBox">
        {coloredBoxes.map((color, index) => (
          <div
            key={index}
            className="divBox"
            style={{ backgroundColor: color }}
            title={`Prev: ${previousColors[index] || "none"}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import "./Style.css";

// export default function App() {
//   const [color, setColor] = useState("");
//   const [isClicked, setIsClicked] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [changeColor, setChangeColor] = useState([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     if (isClicked && e.target.value === "") {
//       setIsClicked(false);
//     }
//   };
//   const handleColorChange = (e, index) => {
//     if (index + 1 == inputValue) {
//       setColor("red");
//     }

//     setChangeColor((prev) => [prev, ...color]);
//     setIsClicked(true);
//   };
//   const clearMe = () => {
//     setIsClicked(false);
//     setColor("");
//   };
//   const clearChangesBox = () => {
//     setColor("");
//     setIsClicked(false);
//     setInputValue("");
//     setChangeColor([]);
//   };
//   return (
//     <div className="App">
//       <input
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={(e) => {
//           if (e.key === "Backspace") {
//             setIsClicked(false);
//           }
//         }}
//       />
//       {isClicked ? (
//         <button onClick={clearMe}>Clearme</button>
//       ) : (
//         <button onClick={() => handleColorChange(inputValue - 1)}>
//           ColorMe
//         </button>
//       )}
//       <button onClick={clearChangesBox}>Clear All</button>
//       <div className="mainBox">
//         {Array(25)
//           .fill("")
//           .map((item, index) => (
//             <div
//               key={index}
//               className="divBox"
//               style={{
//                 backgroundColor: `${
//                   isClicked && inputValue == index + 1 ? color : changeColor
//                 }`,
//               }}
//             >
//               {index + 1}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
