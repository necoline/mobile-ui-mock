import React from "react";

const Overview = props => {
  return (
    <div>
      <div className="job__logo-wrapper">
        <img src={props.companyLogo} alt={props.companyName} />
      </div>
      <div className="job__info-wrapper">
        <h1>{props.jobTitle}</h1>
        <p>{props.companyName}</p>
        <hr />
      </div>
    </div>
  );
};

export default Overview;
