import React from "react";
import './Checkbox.css'
const Checkbox = ({show}) => {
  return (
    <div className="checkbox">
      <div
        style={{
          display: show ? "flex" : "none",
          marginBottom: "0.5rem",
        }}
      >
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          required=""
          className="checkbox__input"
          lang="en"
        />
        <label style={{ verticalAlign: "center" }} for="agreeToTerms">
          <div>
            I agree to Lyft’s{" "}
            <a
              href="https://s3.amazonaws.com/api.lyft.com/static/terms.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </label>
      </div>
    </div>
    // <input className="checkbox" type="checkbox" name="" id="" />
  );
};

export default Checkbox;
