import React from "react";
import H6 from "./H6";
import "./VerticalIconText.css";

const VerticalIconText = ({ image, alt, header, paragraph }) => {
  return (
    <div className="verticalicontext">
      <img src={image} alt={alt} class="verticalicontext__img" />
      <H6>{header}</H6>
      <p>{paragraph}</p>
      <div class="verticalicontext__devider"></div>
    </div>
  );
};

export default VerticalIconText;
