import React, { useState } from "react";
import "./ModelPopUp.css";

const ModelPopUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [userFeedBack, setUserFeedBack] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (userFeedBack.trim()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setUserFeedBack("");
  };

  return (
    <div className={`modalApp ${showModal ? "modalClosed" : "modalOpen"}`}>
      {!showModal && (
        <div className="modalBtn">
          <button onClick={() => setShowModal(true)}>Feedback</button>
        </div>
      )}

      {showModal && (
        <div className="modalOverlay" onClick={handleClose}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            {submitted ? (
              <div>
                <p> User Feedback </p>
                <div className="feedBackDiv">
                  <h3>Feedback : {userFeedBack}</h3>
                  <h3>Thank You for Shopping!...</h3>
                </div>
                <button className="closeBtn" onClick={handleClose}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="modalImg">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gxUHCjXRFXoyeq_vMBAq_gkSJeyMsZZ7fQ&s"
                    alt="Good"
                    title="Good"
                    onClick={() => setUserFeedBack("Good")}
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gxUHCjXRFXoyeq_vMBAq_gkSJeyMsZZ7fQ&s"
                    alt="Average"
                    title="Average"
                    onClick={() => setUserFeedBack("Average")}
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gxUHCjXRFXoyeq_vMBAq_gkSJeyMsZZ7fQ&s"
                    alt="Bad"
                    title="Bad"
                    onClick={() => setUserFeedBack("Bad")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your feedback..."
                    onChange={(e) => setUserFeedBack(e.target.value)}
                    value={userFeedBack}
                  />
                </div>
                <div>
                  <button className="closeBtn" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelPopUp;
