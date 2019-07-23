import React, { Component } from "react";
import Header from "../common/Header";
import Overview from "./Overview";
import Details from "./Details";
import data from "../data.json";
import "./job.css";

class Job extends Component {
  // Ideally this component would be passed an job id that
  // would be used to get a specific listing

  render() {
    return (
      <div className="page">
        <Header title={data.jobTitle} actionIcon="share" actionText="Share" />
        <div className="job__container">
          <Overview
            companyName={data.companyName}
            jobTitle={data.jobTitle}
            companyLogo={data.companyLogo}
          />
          <Details
            payRate={data.payRate}
            payUnit={data.payUnit}
            deadline={data.deadline}
            location={data.location}
          />
        </div>
      </div>
    );
  }
}

export default Job;
