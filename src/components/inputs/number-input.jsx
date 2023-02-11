import React from "react";

const NumberInput = ({
  id,
  placeholder,
  type,
  typeClass,
  isRequire,
  onChangeInput,
}) => {
  const getInput = (e) => {
    onChangeInput(e.target.getAttribute("id").toLowerCase(), e.target.value);
  };
  return (
    <React.Fragment>
      <div className="input-container">
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={getInput}
          className={typeClass}
          required={isRequire}
        />
      </div>
    </React.Fragment>
  );
};

export default NumberInput;
