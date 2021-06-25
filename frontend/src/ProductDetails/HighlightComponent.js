import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  highlightMargin: {
    marginLeft: theme.spacing(1),
  },
}));

const HighlightComponent = (props) => {
  const { highlights } = props;
  const utilClasses = utilityClasses();
  const highlightStyle = useStyles();

  return (
    <div>
      <Typography
        className={`${utilClasses.semiBold} ${utilClasses.marginTwo}`}
      >
        Highlights
      </Typography>
      {highlights.map((highlight, index) => (
        <Typography
          key={index}
          component="li"
          variant="body2"
          className={`${utilClasses.spacing} ${highlightStyle.highlightMargin}`}
        >
          {highlight}
        </Typography>
      ))}
    </div>
  );
};

export default HighlightComponent;
