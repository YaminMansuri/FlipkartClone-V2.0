import React from "react";

import { makeStyles } from "@material-ui/core";
import { ShoppingCart, FlashOn } from "@material-ui/icons";

import ButtonComponent from "../Button/ButtonComponent";

const useStyles = makeStyles((theme) => ({
  yellow: {
    backgroundColor: theme.palette.yellow.main,
    "&:hover": {
      backgroundColor: "#ffb339",
    },
  },
  orange: {
    backgroundColor: theme.palette.orange.main,
    "&:hover": {
      backgroundColor: "#ff7936",
    },
  },
}));

const ButtonsComponent = (props) => {
  const { className, btnMargin } = props;
  const buttonsStyle = useStyles();

  return (
    <div className={className}>
      <ButtonComponent
        color={buttonsStyle.yellow}
        margin={btnMargin}
        icon={<ShoppingCart />}
      >
        Add to Cart
      </ButtonComponent>
      <ButtonComponent
        color={buttonsStyle.orange}
        margin={btnMargin}
        icon={<FlashOn />}
      >
        Buy Now
      </ButtonComponent>
    </div>
  );
};

export default ButtonsComponent;
