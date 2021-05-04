import React from "react";
import "./Signup.css";

import Form from "../Components/Form";
import SignupHeader from './../Components/SignupHeader';
import Logo from "../Components/Logo";
const Signup = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero__logo">
        <Logo/>
        </div>
        <section className="container hero__section">
          <div className="row hero__row">
            <SignupHeader/>
            <div className="col-lg-12 col-xs-12 hero__form">
              <Form/>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Signup;
