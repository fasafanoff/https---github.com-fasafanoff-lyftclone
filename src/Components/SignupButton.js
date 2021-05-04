import React from 'react';
import "./SignupButton.css";

const SignupButton = (props) => {
    return (
        <button className="signup-btn" type="submit" {...props}>
            {props.children}
        </button>
    );
}

export default SignupButton;
