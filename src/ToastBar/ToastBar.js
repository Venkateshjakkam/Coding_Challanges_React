import { useState } from "react";
import "./ToastBar.css";

const ToastBar = () => {
  const [toast, setToast] = useState(false);
  const [positionY, setPositionY] = useState("top");
  const [positionX, setPositionX] = useState("left");
  const [toastMessage, setToastMessage] = useState("I am toast message");

  const handleToast = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  const handlePositionYChange = (e) => {
    setPositionY(e.target.value);
  };

  const handlePositionXChange = (e) => {
    setPositionX(e.target.value);
  };

  const handleMessageChange = (e) => {
    setToastMessage(e.target.value);
  };

  return (
    <div>
      <div>
        <select
          id="positiony"
          onChange={handlePositionYChange}
          value={positionY}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>

        <select
          id="positionx"
          onChange={handlePositionXChange}
          value={positionX}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>

        <input
          type="text"
          value={toastMessage}
          onChange={handleMessageChange}
          placeholder="Enter toast message"
        />
      </div>
      {toast && (
        <div className={`toast ${positionY} ${positionX}`}>
          <h3>{toastMessage}</h3>
        </div>
      )}
      <div>
        <button onClick={handleToast}>Show Toast</button>
      </div>
    </div>
  );
};

export default ToastBar;
