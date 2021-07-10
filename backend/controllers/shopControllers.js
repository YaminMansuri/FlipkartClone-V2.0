import UserModel from "../models/UserModel.js";

const findCartProductIndex = (oldCartItems, productId) => {
  return oldCartItems.findIndex((cartProduct) => {
    if (!cartProduct.product) return -1;
    return cartProduct.product.toString() === productId.toString();
  });
};

const quantityChangeHandler = (
  updatedCartItems,
  index,
  oldCartItems,
  value
) => {
  if (value)
    return (updatedCartItems[index].quantity =
      oldCartItems[index].quantity + value);
  else
    return (updatedCartItems[index].quantity =
      oldCartItems[index].quantity + 1);
};

const pushCartItem = (updatedCartItems, productId) => {
  return updatedCartItems.push({
    product: productId,
    quantity: 1,
  });
};

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, value } = req.body;

    const user = await UserModel.findById(userId);

    const oldCartItems = user.cart.items;
    const updatedCartItems = [...oldCartItems];

    const cartProductIndex = findCartProductIndex(oldCartItems, productId);
    cartProductIndex >= 0
      ? quantityChangeHandler(
          updatedCartItems,
          cartProductIndex,
          oldCartItems,
          value
        )
      : pushCartItem(updatedCartItems, productId);

    const updatedCart = {
      items: updatedCartItems,
    };

    user.cart = updatedCart;
    await user.save();
    const { cart } = await user.populate("cart.items.product").execPopulate();
    res.json({ cartItems: cart });
  } catch (error) {
    console.log("Error!!!", error);
    res.status(400).json({ error });
  }
};

export const getCart = async (req, res) => {
  const { userId } = req.params;
  const user = await UserModel.findById(userId).select("cart");
  const { cart } = await user.populate("cart.items.product").execPopulate();
  res.json({ cartItems: cart });
};

export const deleteCartItem = async (req, res) => {
  const { userId, productId } = req.params;
  const user = await UserModel.findById(userId);
  const oldCartItems = user.cart.items;
  const updatedCartItems = oldCartItems.filter(
    (cartItem) => cartItem.product.toString() !== productId.toString()
  );
  const updatedCart = {
    items: updatedCartItems,
  };
  user.cart = updatedCart;
  await user.save();
  const { cart } = await user.populate("cart.items.product").execPopulate();
  res.json({ cartItems: cart });
};
