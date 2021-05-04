import React from "react";
import "./Card.css";
const Card = ({img_url,img_alt,header,paragraph}) => {
  return (
    <div className="icard row">
      <div className="col-xs-12 col-md-3 col-md-offset-1 icard__imgcontainer">
        <img
          src={img_url}
          alt={img_alt}
          className="icard__img"
        />
      </div>
      <div className="col-xs-12 col-md-7">
        <h3 className="text-md-left">{header}</h3>
        <p>
          {paragraph}
        </p>  
      </div>
    </div>
  );
};

export default Card;
