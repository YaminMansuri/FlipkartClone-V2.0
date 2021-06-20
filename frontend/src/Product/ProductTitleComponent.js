import React from "react";

import { Typography } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const ProductTitleComponent = (props) => {
  const { title } = props;
  const utilClasses = utilityClasses();

  return (
    <Typography className={utilClasses.lineHeight} noWrap>
      {title}
    </Typography>
  );
};

export default ProductTitleComponent;
