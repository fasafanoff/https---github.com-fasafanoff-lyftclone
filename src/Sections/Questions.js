import React from "react";
import "./Questions.css"
import FaqContainer from './../Components/FaqContainer';
const Questions = () => {
  return (
    <div className="container-fluid questions">
      <div className="container questions__container">
        <div>
          <h2>Frequently Asked Questions</h2>
          <div className="questions__space"></div>
          <div className="questions__content">
            <div className="questions__faq">
                <FaqContainer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
