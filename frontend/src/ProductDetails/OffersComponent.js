import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.body2.fontSize,
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(1),
  },
  blueColor: {
    color: theme.palette.primary.main,
  },
}));

const OffersComponent = () => {
  const offerStyle = useStyles();
  const utilClasses = utilityClasses();

  return (
    <>
      <Typography className={utilClasses.semiBold}>Available offers</Typography>
      <div className={`${utilClasses.displayFlex} ${utilClasses.spacing}`}>
        <LocalOffer className={offerStyle.iconStyle} />
        <Typography component="span" variant="body2">
          <span className={utilClasses.semiBold}>Bank Offer</span> 10% off on
          HDFC Bank Credit Card transactions, up to ₹500. On Orders of ₹5000{" "}
          <span className={`${offerStyle.blueColor} ${utilClasses.semiBold}`}>
            T&C
          </span>
        </Typography>
      </div>
      <div className={`${utilClasses.displayFlex} ${utilClasses.spacing}`}>
        <LocalOffer className={offerStyle.iconStyle} />
        <Typography component="span" variant="body2">
          <span className={utilClasses.semiBold}>Bank Offer</span> 10% off on
          HDFC Bank Debit and Credit Cards EMI transactions, up to ₹1000. On
          Orders of ₹5000{" "}
          <span className={`${offerStyle.blueColor} ${utilClasses.semiBold}`}>
            T&C
          </span>
        </Typography>
      </div>
      <div className={`${utilClasses.displayFlex} ${utilClasses.spacing}`}>
        <LocalOffer className={offerStyle.iconStyle} />
        <Typography component="span" variant="body2">
          <span className={utilClasses.semiBold}>Bank Offer</span> 5% Unlimited
          Cashback on Flipkart Axis Bank Credit Card{" "}
          <span className={`${offerStyle.blueColor} ${utilClasses.semiBold}`}>
            T&C
          </span>
        </Typography>
      </div>
      <div className={`${utilClasses.displayFlex} ${utilClasses.spacing}`}>
        <LocalOffer className={offerStyle.iconStyle} />
        <Typography component="span" variant="body2">
          <span className={utilClasses.semiBold}>Special Price</span> Extra
          ₹2500 off(price inclusive of discount){" "}
          <span className={`${offerStyle.blueColor} ${utilClasses.semiBold}`}>
            T&C
          </span>
        </Typography>
      </div>
    </>
  );
};

export default OffersComponent;
