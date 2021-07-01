import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { ShoppingCart, FlashOn } from "@material-ui/icons";

import ButtonComponent from "../Button/ButtonComponent";
import { AuthContext } from "../shared/context/AuthContext";
import { useParams } from "react-router-dom";
import { addToCartAction } from "../store/Actions/shopActions";

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
  const { userId } = useContext(AuthContext);
  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    console.log("Clicked");
    dispatch(addToCartAction(userId, productId));
  };

  return (
    <div className={className}>
      <ButtonComponent
        color={buttonsStyle.yellow}
        margin={btnMargin}
        icon={<ShoppingCart />}
        onClick={addToCartHandler}
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
