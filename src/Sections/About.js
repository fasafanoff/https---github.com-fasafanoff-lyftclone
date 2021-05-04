import React from "react";
import H3 from "./../Components/H3";
import "./About.css";
const About = () => {
  return (
    <div className="container-fluid bg-white about">
      <div className="container">
        <div className="row about__content">
          <H3 className="w-100">What is Lyft?</H3>
          <p className="col-lg-8 col-xs-12">
            Lyft is a platform that connects drivers with individuals and
            organizations that need rides.
            <br />
            <br /> We know this is a challenging time, and as the COVID-19
            crisis continues the well-being of Lyft drivers is our priority.
            Visit our{" "}
            <a
              href="https://www.lyft.com/safety/coronavirus/driver"
              target="_blank"
              rel="noopener noreferrer"
              class=""
            >
              site
            </a>{" "}
            to learn what steps we're taking to support drivers, and how we're
            finding new opportunities for them to earn while helping their
            communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
