import React from "react";
import "./NoCar.css";
import IconText from './../Components/IconText';

const NoCar = () => {
  return (
    <div>
      <div className="container-fluid NoCar">
        <div className="container">
          <div className="row">
            <h4 className="">
              <a
                href="https://www.lyft.com/expressdrive"
                className="NoCar__link"
              >
                <h3 className="NoCar__header">Don’t have a car?</h3>Get a
                flexible rental with Lyft Express Drive
              </a>
            </h4>
          </div>
          <div className="row NoCar__iconswrapper">
            <div className="col-xs-12 ">
              <ul className="list-unstyled row NoCar__icons">
                <li className="col-lg-4">
                  <IconText
                    title="Drive Your Way"
                    paragraph="Get a car any time—and return it when you want after 7
                      days."
                    icon="fas fa-car"
                  />
                </li>
                <li className="col-lg-4 ">
                  <IconText
                    icon="fas fa-piggy-bank"
                    title="Cut Costs"
                    paragraph="Insurance and standard maintenance are always included."
                  />
                </li>
                <li className="col-lg-4 ">
                  <IconText
                    icon="fas fa-compass"
                    title="Unlimited Lyft Miles"
                    paragraph="Drive unlimited miles for Lyft and get extra miles for
                      personal use."
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-xs-12">
              <p className="mb-0">
                The more you drive, the less you pay with all inclusive rentals
                designed to help you earn on your terms.
              </p>
              <a href="https://www.lyft.com/expressdrive" className="NoCar__learnmore">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoCar;
