import React from "react";
import { TopAppBar, TopAppBarRow } from "@rmwc/top-app-bar";
import "./topbar.css";

const TopBar = () => {
  return (
    <div>
      <TopAppBar fixed>
        <TopAppBarRow />
      </TopAppBar>
    </div>
  );
};

export default TopBar;
