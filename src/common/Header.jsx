import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import MaterialIcon from "material-icons-react";
import "./header.css";

const Header = props => {
  return (
    <div className="header">
      <Grid>
        <GridCell span={1}>
          <MaterialIcon icon="arrow_back" />
        </GridCell>
        <GridCell span={2}>{props.title}</GridCell>
        <GridCell span={2}>
          <MaterialIcon icon={props.actionIcon} color="#00CB63" />
          {props.actionText}
        </GridCell>
      </Grid>
    </div>
  );
};

export default Header;
