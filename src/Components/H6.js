import React from "react";
import "./H6.css";
const H6 = ({ children, className, ...props }) => {
  return (
    <h6 className={`h6 ${className ?? ""}`} {...props}>
      {children}
    </h6>
  );
};

export default H6;
