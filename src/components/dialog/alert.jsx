import React, { useEffect, useState } from "react";
import { clear } from "../../redux/slices/notify.slice";
import { useAppDispatch } from "../../redux/store";
import Logo from "./logo";
import "./style.css";
const Alert = ({ context, alertColor, title }) => {
  const dispatch = useAppDispatch();
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

  const handleClose = () => {
    dispatch(clear());
  };

  useEffect(() => {
    changeColor();
  }, [alertColor]);
  return (
    <div className="popup">
      <div className="popup-panel">
        <div>
          <Logo type={alertColor} color={color} />
        </div>
        <p className="popup-status" style={{ color: color }}>
          {title}
        </p>
        <p className="popup-message">{context}</p>
        <div>
          <button className="status-button" onClick={handleClose} style={{ backgroundColor: color }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
