import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import { Button } from "@rmwc/button";
import MaterialIcon from "material-icons-react";
import "./header.css";

const Header = props => {
  return (
    <div className="header">
      <Grid>
        <GridCell span={1} className="header__action">
          <Button
            className="header__button-back"
            icon={<MaterialIcon icon="arrow_back" size="medium" />}
          />
        </GridCell>
        <GridCell
          span={3}
          className="header__action mdc-layout-grid--align-right"
        >
          <Button
            className="header__action"
            icon={props.actionIcon}
            label={props.actionText}
          />
        </GridCell>
      </Grid>
    </div>
  );
};

export default Header;
