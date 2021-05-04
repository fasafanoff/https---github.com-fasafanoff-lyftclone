import React from "react";
import "./FormInput.css";
const FormInput = ({ id, label, ...props }) => {
  return (
    <div className="input">
      <input
        id={id}
        lang="en"
        required=""
        placeholder=" "
        className="input"
        {...props}
      />
      <label for={id}>
        <em>{label}</em>
      </label>
    </div>
  );
};

export default FormInput;
