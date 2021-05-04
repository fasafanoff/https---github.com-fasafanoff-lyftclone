
import React from 'react';
import Collapse from './Collapse';
import "./FaqContainer.css";
const FaqContainer = () => {

    return (
      <div className="faq">
        <div className="faq__container">
          <Collapse title="Is driving for Lyft affected by COVID-19?">
            <p>
              We’re monitoring the COVID-19 situation closely, and taking action
              based on guidance from the Centers for Disease Control and
              Prevention (CDC), the World Health Organization (WHO), and local
              and federal officials. <br />
              <br />
              We remain operational across North America except in a select few
              locations where we've received alternate guidance from local and
              federal officials. <br />
              <br />
              Even in communities where local officials have asked residents to
              shelter in place, rides on the Lyft platform continue to help
              people meet their essential needs, such as grocery shopping or
              picking up medication.
              <br />
              <br />
              For the latest updates and information about Lyft’s response to
              COVID-19, and what we’re doing to support drivers, please visit
              our{" "}
              <a
                href="https://www.lyft.com/safety/coronavirus"
                target="_blank"
                rel="noreferrer"
              >
                online resource.
              </a>
            </p>
          </Collapse>
          <Collapse title="How long does the application process take?">
            <div>
              <p>
                Typically, filling out basic information (like your mobile phone
                number, driver’s license, and other documents) takes less than
                30 minutes. Then a few more things need to happen:{" "}
              </p>
              <p>
                <strong>Vehicle Inspection:</strong> If you’re using your own
                car, it will need to pass a Lyft inspection to make sure it’s
                road-ready. We’ll help you find a location and schedule an
                appointment.
              </p>
              <p>
                <strong>Background check</strong>: Safety is our top priority,
                so we’ll need to run a background check to review your driving
                history. This can take a few days to be completed.
              </p>
              <p></p>
            </div>
          </Collapse>
          <Collapse title="When and where should I drive?">
            <div>
              <p>
                The Lyft Driver app is your key to success, with real-time info
                and features that make earning easy:
              </p>
              <p>
                <strong>Hourly ride predictions</strong> for each day — you’ll
                get an overview of the best times to drive and where passengers
                need rides
              </p>
              <p>
                <strong>Available bonuses</strong> for the week
              </p>
              <p>
                <strong>Local events</strong> (and earning opportunities), if
                applicable, that are happening nearby
              </p>
              <p></p>
            </div>
          </Collapse>
          <Collapse title="Is Lyft safe?">
            <div>
              <p>
                At Lyft, we’re committed to driver and passenger safety. We’ve
                got your back before, during, and after the ride.
              </p>
              <p>
                <strong>24/7 support:</strong> Easily contact our support team
                for reliable, around-the-clock help by phone or email, with any
                issues on and off the road.
              </p>
              <p>
                <strong>Emergency assistance:</strong> You always have the
                ability to contact 911 directly from your app.
              </p>
              <p>
                <strong>Insurance:</strong> Our car insurance has your back —
                from the moment you switch into driver mode until you drop off
                your last passenger of the day.{" "}
                <a
                  href="https://help.lyft.com/hc/en-us/articles/115013080548"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </p>
              <p></p>
              <div>
                <p>
                  The Lyft Driver app is your key to success, with real-time
                  info and features that make earning easy:
                </p>
                <p>
                  <strong>Hourly ride predictions</strong> for each day — you’ll
                  get an overview of the best times to drive and where
                  passengers need rides
                </p>
                <p>
                  <strong>Available bonuses</strong> for the week
                </p>
                <p>
                  <strong>Local events</strong> (and earning opportunities), if
                  applicable, that are happening nearby
                </p>
                <p></p>
              </div>
            </div>
          </Collapse>
          <Collapse title="How do I get paid?">
            <div>
              <p>
                Your pay is based on the time and distance of a ride (and you
                keep 100% of your tips, of course). All payments are made
                through the Lyft Driver app weekly, so you’ll need to add your
                banking info to get paid. You can also set up Express Pay to
                cash out when you want.{" "}
              </p>
            </div>
          </Collapse>
          <Collapse title="What is driving really like?">
            <div>
              <p>
                It can vary from city to city. To give you a better sense of
                what driving with Lyft is like,{" "}
                <a
                  href="https://thehub.lyft.com/how-to-give-a-ride"
                  target="_blank"
                  rel="noreferrer"
                >
                  watch the full video
                </a>{" "}
                of a new driver during their first week.{" "}
              </p>
            </div>
          </Collapse>
          <Collapse title="What about the wear and tear on my car?">
            <div>
              <p>
                We’re expanding Lyft Driver Centers, Lyft Mobile Service, and
                our Openbay partnership to lower the costs of vehicle service.
                Or you can rent a car through our Express Drive program.
              </p>
            </div>
          </Collapse>
          <Collapse title="What documents are required?">
            <div>
              <p>
                Application requirements can vary by city.{" "}
                <a
                  href="https://help.lyft.com/hc/en-us/sections/115003494688"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find yours here
                </a>{" "}
                for more information.
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    );
}

export default FaqContainer;
