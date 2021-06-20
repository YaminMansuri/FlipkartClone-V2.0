import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  productRatings: {
    fontSize: 14,
    color: "white",
    padding: "0.1rem 0.5rem",
    borderRadius: "0.2rem",
    backgroundColor: theme.palette.secondary.main,
  },
  numOfRatingsStyle: {
    marginLeft: theme.spacing(1),
  },
  icon: {
    fontSize: `calc(0.1em + ${theme.typography.caption.fontSize})`,
    marginLeft: theme.spacing(0.5),
    marginBottom: "0.28rem",
  },
}));

const RatingsComponent = (props) => {
  const { ratings, numOfRatings } = props;
  const ratingsStyles = useStyles();
  const utilClasses = utilityClasses();

  return (
    <div className={`${utilClasses.displayFlex} ${utilClasses.lineHeight}`}>
      <span
        className={`${ratingsStyles.productRatings} ${utilClasses.displayFlex}`}
        color="secondary"
      >
        <Typography variant="caption" className={utilClasses.bold}>
          {ratings}
        </Typography>
        <Star className={`${ratingsStyles.icon} ${utilClasses.marginAuto}`} />
      </span>

      <Typography
        component="span"
        color="textSecondary"
        className={ratingsStyles.numOfRatingsStyle}
      >
        ({numOfRatings})
      </Typography>
    </div>
  );
};

export default RatingsComponent;
