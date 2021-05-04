import React, { useRef, useEffect } from "react";
import "./Interested.css";
const Interested = () => {
  const ref = useRef(null);
  useEffect(() => {
    window.onscroll = (e) => {
      var y = window.scrollY;
      if (y >= 800) {
        ref.current.style.opacity = 1;
      } else {
        ref.current.style.opacity = 0;
      }
    };
  }, []);
  return (
    <div className="interested" ref={ref}>
      <div className="text-xs-center bg-white interested__container">
        <div className="interested__inner">
          <div className="interested__content">
            <p className="col-md-5 interested__p">
              Interested in driving with Lyft?
            </p>
            <div class="col-md-7 d-flex justify-content-around">
              <button
                type="button"
                class="btn btn-secondary text-uppercase interested__btn interested__notbtn"
              >
                Not yet
              </button>
              <button
                type="button"
                class="btn flex1 text-uppercase interested__btn interested__yesbtn"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
