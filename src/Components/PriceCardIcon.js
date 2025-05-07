import React, { useState } from "react";
import "./PriceCardIcon.css";

const stockPredict = [
  {
    title: "I am at page1",
    body: "Here you will get all the Medical stocks",
    conclusion: "They are helpful for long term...",
  },
  {
    title: "I am at page2",
    body: "Here you will get all the banking stocks",
    conclusion: "They are investment for more than 5 years...",
  },
  {
    title: "I am at page3",
    body: "Here you will get IT stocks and services",
    conclusion: "They are very risky...",
  },
];

const PriceCardIcon = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <h2>Price Card Icon</h2>
      <div className="button-group">
        {stockPredict.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${currentPage === index ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          >
            Page {index + 1}
          </button>
        ))}
      </div>
      <div className="main">
        <div className="priceTag">
          <h2>{stockPredict[currentPage].title}</h2>
          <p>{stockPredict[currentPage].body}</p>
          <p>{stockPredict[currentPage].conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCardIcon;

// Example-2//////////////////
// import React, { useState } from "react";
// import "./PriceCardIcon.css";

// const stockPredict = [
//   {
//     title: "I am at page1",
//     body: "Here you will get all the Medical stocks",
//     conclusion: "They are helpful for long term...",
//   },
//   {
//     title: "I am at page2",
//     body: "Here you will get all the banking stocks",
//     conclusion: "They are investment for more than 5 years...",
//   },
//   {
//     title: "I am at page3",
//     body: "Here you will get IT stocks and services",
//     conclusion: "They are very risky...",
//   },
// ];

// const PriceCardIcon = () => {
//   const [next, setNext] = useState(0);

//   const handleNext = () => {
//     setNext((prev) => (prev < stockPredict.length - 1 ? prev + 1 : 0)); // Reset to 0 when reaching the last item
//   };

//   return (
//     <div>
//       <h2>PriceCardIcon</h2>
//       <div className="main">
//         <div className="priceTag">
//           <button onClick={handleNext}>Next Page:-{next + 1}</button>
//           <h2>{stockPredict[next].title}</h2>
//           <p>{stockPredict[next].body}</p>
//           <p>{stockPredict[next].conclusion}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceCardIcon;
