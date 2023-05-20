import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  id,
  typeDateFormat,
  typeClass,
  isRequire,
  onChangeInput,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const getInput = (date) => {
    setSelectedDate(date);
    onChangeInput(id, date.toLocaleDateString("en-029", "MM/dd/yyyy"));
  };
  return (
    <React.Fragment>
      <div className="input-container">
        <DatePicker
          selected={selectedDate}
          className={typeClass}
          required={isRequire}
          onChange={getInput}
          dateFormat={typeDateFormat}
        />
      </div>
    </React.Fragment>
  );
};

export default DateInput;
