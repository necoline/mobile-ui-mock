import React, { Component } from "react";
import Header from "../common/Header";
import data from "../data.json";
import "./job.css";

class Job extends Component {
  // ideally this component would be passed an job id that
  // would be used to get a specific listing

  render() {
    return (
      <div className="page-body">
        <Header title={data.jobTitle} actionIcon="share" actionText="share" />
        <img
          className="header-logo"
          src="../../assets/yda-logo"
          alt={data.companyName}
        />
      </div>
    );
  }
}

export default Job;
