import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    marginBottom: theme.spacing(0.7),
  },
}));

const ProductTitleComponent = (props) => {
  const { title, variant, wrap } = props;
  const classes = useStyles();

  return (
    <Typography
      className={`
        ${classes.titleStyle} 
      `}
      variant={variant}
      noWrap={wrap}
    >
      {title}
    </Typography>
  );
};

export default ProductTitleComponent;
