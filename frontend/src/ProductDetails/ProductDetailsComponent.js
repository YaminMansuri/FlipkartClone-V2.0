import React from "react";

import { Divider, Button } from "@material-ui/core";

import ProductTitleComponent from "../Product/ProductTitleComponent";
import RatingsComponent from "../Product/RatingsComponent";
import PriceComponent from "../Product/PriceComponent";
import OffersComponent from "./OffersComponent";
import ButtonComponent from "../Button/ButtonComponent";

const useStyles = (theme) => ({});

const ProductDetailsComponent = (props) => {
  const { product, className } = props;
  const productStyles = useStyles();

  return (
		<div className={className}>
      <ProductTitleComponent title={product.name} wrap={false} />
      <RatingsComponent
        ratings={product.ratings}
        numOfRatings={product.numOfRatings}
      />
      <PriceComponent
        price={product.price}
        discount={product.discount}
        variant="h5"
      />
      <Divider />
      <OffersComponent />
    </div>
  );
};

export default ProductDetailsComponent;
