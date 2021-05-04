import React, { useState } from "react";
import "./Input.css";


const Input = ({ id, label }) => {
  const [Tel, setTel] = useState("");
    
    const formatPhoneNumber = (value) => {
        if (!value) return value;

        const phoneNumber = value.replace(/[^\d]/g, "");

        const phoneNumberLenght = phoneNumber.length;

        if (phoneNumberLenght < 4) return phoneNumber;

        if (phoneNumberLenght < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 9)}`;
  }

  return (
    <div className="input">
      <input
        type="tel"
        id={id}
        placeholder = " "
        value={Tel}
        onChange={(e) => {
            setTel(formatPhoneNumber(e.target.value));
        }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
