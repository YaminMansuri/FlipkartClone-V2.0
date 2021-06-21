import React from "react";

import { Typography } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const ProductTitleComponent = (props) => {
  const { title, wrap } = props;
  const utilClasses = utilityClasses();

  return (
    <Typography
      className={`
      ${utilClasses.spacing} ${utilClasses.semiBold}`}
      noWrap={wrap}
    >
      {title}
    </Typography>
  );
};

export default ProductTitleComponent;
