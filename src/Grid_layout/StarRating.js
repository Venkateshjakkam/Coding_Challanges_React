// // import React, { useState } from "react";
// // import "./StarRating.css";

// // const StarRating = () => {
// //   const [fillColor, setFillColor] = useState([]);
// //   const [isTrue, setIsTrue] = useState(false);

// //   const handleColorChange = (index) => {
// //     setFillColor((prev) => [prev, ...fillColor[index]]);
// //     setIsTrue((prev) => !prev);
// //     console.log("Change the state the state");
// //   };

// //   const selectedColorState = () => {
// //     console.log("Click the state the state");
// //     setFillColor((prev) => [prev, ...fillColor]);
// //     setIsTrue((prev) => !prev);
// //   };
// //   return (
// //     <div className="starDiv">
// //       {[1, 2, 3, 4, 5].map((item, index) => (
// //         <div
// //           key={index}
// //           className={isTrue ? "coloredDiv" : "mainDiv"}
// //           onChange={handleColorChange(index)}
// //           onClick={selectedColorState}
// //         ></div>
// //       ))}
// //     </div>
// //   );
// // };
// // export default StarRating;

// import React, { useState } from "react";
// import "./StarRating.css";

// const StarRating = () => {
//   const [rating, setRating] = useState(0); // holds the current rating

//   const handleClick = (index) => {
//     setRating(index + 1); // set rating based on clicked index
//   };

//   return (
//     <div className="starDiv">
//       {[0, 1, 2, 3, 4].map((index) => (
//         <div
//           key={index}
//           className={index < rating ? "coloredDiv" : "mainDiv"}
//           onClick={() => handleClick(index)}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default StarRating;

import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="starDiv">
      {Array(6).map((index) => (
        <div
          key={index}
          className={`circle ${
            index < (hoverRating || rating) ? "filled" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
