import React from 'react';
import "./AlreadyApplied.css";
const AlreadyApplied = () => {
    return (
      <div style={{marginTop:"1rem"}}>
        Already applied or already a driver?
        <a
          href="https://account.lyft.com/auth/verify?v=dwlresume&amp;next=https%3A%2F%2Fwww.lyft.com%2Fdrivers%2Fapply%2Fresume"
          className="d-block"
        >
          Log in
        </a>
      </div>
    );
}

export default AlreadyApplied;
