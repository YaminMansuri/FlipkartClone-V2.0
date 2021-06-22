import React from "react";

import { makeStyles } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      height: "50vh",
      margin: theme.spacing(0),
    },
  },
  image: {
    margin: "auto",

    [theme.breakpoints.down("md")]: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
    backgroundColor: "teal",
  },
}));

const ImageComponent = (props) => {
  const { largeImage, name, className } = props;
  const imageStyles = useStyles();
  const utilClasses = utilityClasses();
  return (
    <div
      className={`
        ${imageStyles.imageContainer}
        ${utilClasses.displayFlex}
        ${className}
      `}
    >
      <img src={largeImage} alt={name} className={imageStyles.image} />
    </div>
  );
};

export default ImageComponent;
