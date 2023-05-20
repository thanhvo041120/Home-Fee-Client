import React from "react";
import { DateInputComponent, TextInputComponent } from "../inputs";
import "./css/fee.css";
const Fee = () => {
  return (
    <div className="fee-form-container">
      <div className="fee-row">
        <TextInputComponent
          id="feeDate"
          isRequire={true}
          placeholder={"Date of spending"}
        />
        <DateInputComponent />
      </div>
      <div className="fee-row">
        <TextInputComponent />
      </div>
    </div>
  );
};

export default Fee;
