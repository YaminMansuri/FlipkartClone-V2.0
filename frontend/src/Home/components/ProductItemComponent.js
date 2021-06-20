import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, Typography } from "@material-ui/core";

import RatingsComponent from "../../Product/RatingsComponent";
import PriceComponent from "../../Product/PriceComponent";
import ProductTitleComponent from "../../Product/ProductTitleComponent";
import utilityClasses from "../../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  productItem: {
    width: "100%",
  },
  productImage: {
    display: "flex",
    width: "45%",
    [theme.breakpoints.up("sm")]: {
      width: "min-content",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "min-content",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  marginTop: {
    marginTop: "1rem",
  },
}));

const ProductItemComponent = (props) => {
  const { product } = props;

  const productItemStyles = useStyles();
  const utilClasses = utilityClasses();

  return (
    <div className={productItemStyles.productItem}>
      <Link to={`/product/${product._id}`} className={productItemStyles.link}>
        <img
          src={product.smallImage}
          alt={product.name}
          className={`${productItemStyles.productImage} ${utilClasses.marginAuto}`}
        />

        <Typography
          color="textSecondary"
          className={productItemStyles.marginTop}
        >
          {product.companyName}
        </Typography>

        <ProductTitleComponent title={product.name} />
        <RatingsComponent
          ratings={product.ratings}
          numOfRatings={product.numOfRatings}
        />
        <PriceComponent price={product.price} discount={product.discount} />
      </Link>
    </div>
  );
};

export default ProductItemComponent;
