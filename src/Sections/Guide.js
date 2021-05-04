import React, { useRef } from "react";

import "./Guide.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderPhone from '../Components/Slider';
const Guide = () => {

  
  
  const paragraph = useRef(null);
  const Step = useRef(null);

  return (
    <div className="guide">
      <div className="guide__background" ></div>
      <div className="guide__footer">
        <div className="guide__footercontainer">
          <div className="guide__footerblank"></div>
          <div className="guide__footertitle">
            <h3>How Lyft Driving Works</h3>
          </div>
          <div className="guide__text">
            <div>
              <h5 ref={Step}>STEP 1</h5>
              <div className="guide__paragraph">
                <div className="guide__1paragraph">
                  <p ref={paragraph}>Open the app and turn on driver mode.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderPhone
       
        paragraph={paragraph}
        Step={Step}
      ></SliderPhone>
    </div>
  );
};

export default Guide;
