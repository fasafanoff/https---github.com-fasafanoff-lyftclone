import React from 'react';
import FormInput from './FormInput';
import "./FormSecondInputs.css";
const FormSecondInputs = ({show}) => {
    return (
      <div style={{display:show?"flex":"none"}} className="second-form">
        <div className="second-form__row">
          <div className="m-b-s">
            <FormInput id="firstname" label="first name" required type="text" />
          </div>
          <div className="m-b-s">
            <FormInput id="lastname" label="last name" required type="text" />
          </div>
          <div className="m-b-s">
            <FormInput
              id="email"
              label="email"
              required
              pattern=".+@.+\..+"
              type="email"
            />
          </div>
        </div>
        <div className="second-form__row" >
          <div className="m-b-s">
            <FormInput
              id="city"
              label="city you'll drive in"
              required
              autocomplete="false"
              type="text"
            />
          </div>
          <div>
            <div className="m-b-s">
              <FormInput
                id="promo"
                label="promo/referral code(optional)"
                autocomplete="false"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default FormSecondInputs;
