import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import MaterialIcon from "material-icons-react";

const Header = () => {
  return (
    <div>
      <Grid>
        <GridCell span={1}>
          <MaterialIcon icon="arrow_back" />
        </GridCell>
        <GridCell span={1}>2</GridCell>
        <GridCell span={1}>3</GridCell>
      </Grid>
    </div>
  );
};

export default Header;
