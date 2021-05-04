import React from 'react';
import "./IconText.css";
const IconText = ({title,paragraph,icon}) => {
    return (
      <div className="icontext">
        <i className={`${icon} icontext__icon`}></i>
        <div className="icontext__text">
          <p className="icontext__title">{title}</p>
          <p className="icontext__paragraph">{paragraph}</p>
        </div>
      </div>
    );
}

export default IconText;
