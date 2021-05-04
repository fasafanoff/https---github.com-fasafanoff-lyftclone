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
        className="forminputs__row"
        style={{ display: ShowPhoneInput ? "block" : "none" }}
      >
        <RadioButtons />
        <div
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <InputPhone id="phone" label="Mobile Phone Number"></InputPhone>
        </div>
      </div>
      <Checkbox show={ShowPhoneInput} />

      <SignupButton
        onClick={(e) => {
          if (ShowPhoneInput) {
            setShowPhoneInput(false);
            e.preventDefault();
          }
        }}
      >
        {ShowPhoneInput ? "Next" : "Submit"}
      </SignupButton>
      <AlreadyApplied />
    </div>
  );
};

export default FormInputs;
