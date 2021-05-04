import React from "react";
import H3 from "./../Components/H3";
import VerticalIconText from "./../Components/VerticalIconText";

const Why = () => {
  return (
    <section className="container-fluid bg-white">
      <div className="container">
        <div className="row">
          <H3>Why Lyft?</H3>
        </div>
        <ul className="list-unstyled row justify-content-start-lg">
          <li className="col-md-4">
            <VerticalIconText
              image="https://cdn.lyft.com/brochure/drive-for-lyft-tip.8f0fe5f3.svg"
              alt="Keep your tips"
              header="Keep your tips"
              paragraph="Earn tips from your passengers and keep the whole amount — they’re yours."
            ></VerticalIconText>
          </li>
          <li className="col-md-4">
            <VerticalIconText
              image="https://cdn.lyft.com/brochure/drive-for-lyft-pay.b1e81f99.svg"
              alt="Make More Money"
              header="Make More Money"
              paragraph="With increased Prime Time pricing during peak hours, you make more with Lyft."
            ></VerticalIconText>
          </li>
          <li className="col-md-4">
            <VerticalIconText
              image="https://cdn.lyft.com/brochure/drive-for-lyft-community.de63469a.svg"
              alt="Best Community"
              header="Best Community"
              paragraph="The Lyft community is full of awesome, friendly people — passengers and drivers alike."
            ></VerticalIconText>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Why;
