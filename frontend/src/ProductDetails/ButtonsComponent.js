import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { ShoppingCart, FlashOn } from "@material-ui/icons";

import ButtonComponent from "../Button/ButtonComponent";
import { AuthContext } from "../shared/context/AuthContext";
import { useHistory, useParams } from "react-router-dom";
import {
  addToCartAction,
  placeOrderAction,
} from "../store/Actions/shopActions";
import utilityClasses from "../util/utilityClasses";

const ButtonsComponent = (props) => {
  const { className, btnMargin } = props;
  const { userId } = useContext(AuthContext);
  const { productId } = useParams();

  const utilClasses = utilityClasses();

  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    if (!userId) {
      return alert("You need to login first.");
    }
    dispatch(addToCartAction(userId, productId));
    history.push(`/cart`);
  };

  const buyNowHandler = () => {
    if (!userId) {
      return alert("You need to login first.");
    }
    dispatch(placeOrderAction(userId, productId, null, "checkout-product"));
    history.push(`/order`);
  };

  return (
    <div className={className}>
      <ButtonComponent
        color={utilClasses.yellow}
        margin={btnMargin}
        icon={<ShoppingCart />}
        onClick={addToCartHandler}
      >
        Add to Cart
      </ButtonComponent>
      <ButtonComponent
        color={utilClasses.orange}
        margin={btnMargin}
        icon={<FlashOn />}
        onClick={buyNowHandler}
      >
        Buy Now
      </ButtonComponent>
    </div>
  );
};

export default ButtonsComponent;
