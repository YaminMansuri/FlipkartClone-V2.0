import React from "react";

import { Divider, makeStyles, Typography } from "@material-ui/core";

import ProductTitleComponent from "../Product/ProductTitleComponent";
import RatingsComponent from "../Product/RatingsComponent";
import PriceComponent from "../Product/PriceComponent";
import OffersComponent from "./OffersComponent";
import utilityClasses from "../util/utilityClasses";
import HighlightComponent from "./HighlightComponent";

const useStyles = makeStyles((theme) => ({
  padding: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 5),
    },
  },
}));

const ProductDetailsComponent = (props) => {
  const { product, className } = props;
  const productStyles = useStyles();
  const utilClasses = utilityClasses();

  return (
    <div className={`${className} ${productStyles.padding}`}>
      <ProductTitleComponent title={product.name} wrap={false} variant="h6" />
      <RatingsComponent
        ratings={product.ratings}
        numOfRatings={product.numOfRatings}
      />
      <PriceComponent
        price={product.price}
        discount={product.discount}
        variant="h5"
      />

      <Divider className={utilClasses.marginTwo} />

      <OffersComponent />
      <HighlightComponent highlights={product.highlights} />
      <Typography
        className={`${utilClasses.semiBold} ${utilClasses.marginTwo}`}
      >
        Description
      </Typography>
      <Typography>{product.details}</Typography>
    </div>
  );
};

export default ProductDetailsComponent;
