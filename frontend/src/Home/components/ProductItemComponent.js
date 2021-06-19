import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";

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
  productPrice: {
    margin: 5,
    textDecoration: "line-through",
  },
  productRatings: {
    fontSize: 14,
    color: "white",
    padding: "0.1rem 0.5rem",
    borderRadius: "0.2rem",
    backgroundColor: theme.palette.secondary.main,
  },
  displayFlex: {
    display: "flex",
  },
  marginAuto: {
    margin: "auto",
  },
  icon: {
    fontSize: `calc(0.1em + ${theme.typography.caption.fontSize})`,
    marginLeft: theme.spacing(0.5),
    marginBottom: "0.28rem",
  },
  bold: {
    fontWeight: "bold",
  },
  numOfRatingsStyle: {
    marginLeft: theme.spacing(1),
  },
  lineHeight: {
    lineHeight: "2rem",
  },
  semiBold: {
    fontWeight: "500",
  },
}));

const ProductItemComponent = (props) => {
  const { product } = props;

  const productItemStyles = useStyles();

  const getPrice = () => {
    return product.price - (product.price * product.discount) / 100;
  };

  return (
    <div className={productItemStyles.productItem}>
      <Link to={`/product/${product._id}`} className={productItemStyles.link}>
        <img
          src={product.smallImage}
          alt={product.name}
          className={`${productItemStyles.productImage} ${productItemStyles.marginAuto}`}
        />
        <Typography color="textSecondary">{product.companyName}</Typography>
        <Typography
          align="left"
          className={productItemStyles.lineHeight}
          noWrap
        >
          {product.name}
        </Typography>

        {
          // todo Make a seperate component of product ratings if necessary
        }
        <div
          className={`${productItemStyles.displayFlex} ${productItemStyles.lineHeight}`}
        >
          <span
            className={`${productItemStyles.productRatings} 
              ${productItemStyles.displayFlex}`}
            color="secondary"
          >
            <Typography
              variant="caption"
              className={`${productItemStyles.bold}`}
            >
              {product.ratings}
            </Typography>
            <Star
              className={`${productItemStyles.icon} ${productItemStyles.marginAuto}`}
            />
          </span>

          <Typography
            component="span"
            color="textSecondary"
            className={productItemStyles.numOfRatingsStyle}
          >
            ({product.numOfRatings})
          </Typography>
        </div>
        <Typography className={productItemStyles.lineHeight} noWrap>
          <Typography
            component="span"
            color="textPrimary"
            className={`${productItemStyles.semiBold}`}
          >
            ₹{getPrice()}
          </Typography>
          <Typography
            component="span"
            color="textSecondary"
            className={productItemStyles.productPrice}
          >
            ₹{product.price}
          </Typography>
          <Typography component="span" color="secondary">
            {product.discount}% off
          </Typography>
        </Typography>
      </Link>
    </div>
  );
};

export default ProductItemComponent;
