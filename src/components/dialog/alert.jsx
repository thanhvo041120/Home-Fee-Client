import React, { useState } from "react";
import "./style.css";
const Alert = ({ isOpen, context, handleClose, alertColor, title }) => {
  const [color, setColor] = useState("#ff3333");
  const changeColor = () => {
    if (alertColor === "error") {
      setColor("#ff3333");
      return;
    }
    if (alertColor === "info") {
      setColor("#0288D1");
      return;
    }
    if (alertColor === "warning") {
      setColor("#ED6C02");
      return;
    }
    if (alertColor === "success") {
      setColor("#2E7D32");
      return;
    }
  };

  return (
    <div class="popup" id="notifyUpdate">
      <div class="popup-panel">
        <div class="popup-logo-success"></div>
        <p class="popup-status-success">Success!</p>
        <p class="popup-message">Your changes have been successfully saved!</p>
        <div class="submit-area">
          <button class="submit-btn" id="confirmButton">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
