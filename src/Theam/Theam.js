import React, { useState } from "react";
import "./Theam.css";

const Theam = () => {
  const [backColor, setBackColor] = useState(true);

  const handleTheam = () => {
    setBackColor(!backColor);
  };

  return (
    <div
      style={{
        backgroundColor: `${backColor ? "black" : "red"}`,
        width: "1200px",
        height: "700px",
      }}
    >
      <button className={backColor ? "buttonTheam" : ""} onClick={handleTheam}>
        <img
          className="themButton"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAW8Ff7-HaDm5OAtEVLFN2wstJNlX2R7VWw&s"
          alt="iconTheam"
        />
      </button>
    </div>
  );
};

export default Theam;
