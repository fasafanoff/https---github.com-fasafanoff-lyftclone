import React from "react";
import "./FormInputs.css";
import Checkbox from "./Checkbox";
import SignupButton from "./SignupButton";
import AlreadyApplied from "./AlreadyApplied";
import RadioButtons from "./RadioButtons";
import InputPhone from "./InputPhone";
import FormSecondInputs from "./FormSecondInputs";
import { useState } from "react";

const FormInputs = () => {
  const [ShowPhoneInput, setShowPhoneInput] = useState(true);
  return (
    <div className="forminputs">
      <FormSecondInputs show={!ShowPhoneInput} />
      <div
        style={{
          display: ShowPhoneInput ? "flex" : "none",
          alignItems:"center"
        }}
      >
        <div className="forminputs__row">
          <RadioButtons />
          <div
            style={{
              marginBottom: "0.5rem",
              display: ShowPhoneInput ? "flex" : "none",
            }}
          >
            <InputPhone id="phone" label="Mobile Phone Number"></InputPhone>
          </div>
        </div>
        <Checkbox />
      </div>
      <SignupButton
        onClick={(e) => {
          if (ShowPhoneInput) {
            setShowPhoneInput(false);
            e.preventDefault();
          }
        }}
      >
        Next
      </SignupButton>
      <AlreadyApplied />
    </div>
  );
};

export default FormInputs;
