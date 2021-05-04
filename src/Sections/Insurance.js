import React from "react";
import Card from "./../Components/Card";
import "./Insurance.css";
const Insurance = () => {
  return (
    <section className="container-fluid insurance">
      <div className="container insurance__container">
        <div className="insurance__cards">
          <Card
            img_url="https://cdn.lyft.com/brochure/drive-for-lyft-shield.3c5abfd2.png"
            img_alt="Lyft insurance protection shield"
            header="Lyft Insurance Protection"
            paragraph={
              <>
                {`
                    Lyft provides additional insurance policies, at no cost to the
                    driver. We worked with leading insurance carriers to provide
                    various coverages including: commercial auto liability insurance
                    up to $1M per occurrence, contingent comprehensive and collision
                insurance for drivers who carry comprehensive and collision
                coverage on their personal auto policy, and coverage for bodily
                injury caused by uninsured/underinsured motorists when you are
                engaged in a ride. If you already carry commercial insurance or
                personal coverage providing specific coverage for ridesharing,
                Lyft’s policy will continue to be excess to your insurance
                coverage. Please note, the above coverage may be modified to
                comply with local regulations or state laws. Our policy is
                available in all states in the U.S., except for those rides
                originating in New York City with a TLC (Taxi and Limousine
                  Commission) driver.
                  `}
                <a
                  href="https://help.lyft.com/hc/en-us/articles/115013080548"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get information about our insurance policies.
                </a>
              </>
            }
          />
          <Card
            img_url="https://cdn.lyft.com/brochure/drive-for-lyft-five-stars.4d2fd438.png"
            img_alt="Five star rating"
            header="Passenger Ratings"
            paragraph="Drivers rate passengers after each ride, so you’ve always got a say. We also require passengers to provide valid credit card information for identity verification purposes."
          />
        </div>
      </div>
    </section>
  );
};

export default Insurance;
