import { makeStyles } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: "50vh",
    padding: theme.spacing(2),
  },
  image: {
    margin: "auto",
    maxHeight: "100%",
    maxWidth: "100%",
  },
}));

const ImageComponent = (props) => {
  const { largeImage, name, className } = props;
  const imageStyles = useStyles();
  const utilClasses = utilityClasses();
  return (
    <div
      className={`${imageStyles.imageContainer} ${utilClasses.displayFlex} ${className}`}
    >
			<img src={largeImage} alt={name} className={imageStyles.image} />
    </div>
  );
};

export default ImageComponent;
