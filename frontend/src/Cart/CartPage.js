import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cartItems);

  console.log(cart);
  return <div>Cart Page</div>;
};

export default CartPage;
