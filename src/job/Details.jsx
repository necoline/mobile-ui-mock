import React from "react";
import MaterialIcon from "material-icons-react";

const Details = props => {
  return (
    <div>
      <p className="text-highlight">
        {props.payRate} / {props.payUnit}
      </p>
      <div className="job__line">
        <i className="job__line-icon">
          <MaterialIcon
            alt="clock"
            icon="access_time"
            size="small"
            color="#00cb63"
          />
        </i>
        <p>Apply before {props.deadline}</p>
      </div>
    </div>
  );
};

export default Details;
