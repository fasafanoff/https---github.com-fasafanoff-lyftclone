import React from "react";
import "./RadioButton.css";
const RadioButton = ({label, ...props}) => {
  return (
      <label className="full-width">
        <input
          className="m-r-s radiobutton"
          type="radio"
            {...props}
        />
        {label}
      </label>
  );
};

export default RadioButton;
