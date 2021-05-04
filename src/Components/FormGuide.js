import React from 'react';
import "./FormGuide.css";

const FormGuide = () => {
    return (
      <div className="formguide">
        <span className="formguide__first">
          Sign up to drive
        </span>
        <div className="formguide__blank"></div>
        <span
          className="formguide__second"
        >
          Let's start with your phone number - we'll text you a code to verify
          your phone.
        </span>
      </div>
    );
}

export default FormGuide;
