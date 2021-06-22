import React from "react";

import { Typography } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const HighlightComponent = (props) => {
  const { highlights } = props;
  const utilClasses = utilityClasses();

  return (
    <>
      <Typography
        className={`${utilClasses.semiBold} ${utilClasses.marginTwo}`}
      >
        Highlights
      </Typography>
      {highlights.map((highlight) => (
        <Typography
          component="li"
          variant="body2"
          className={utilClasses.spacing}
        >
          {highlight}
        </Typography>
      ))}
    </>
  );
};

export default HighlightComponent;
