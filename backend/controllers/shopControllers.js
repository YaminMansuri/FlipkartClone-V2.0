import UserModel from "../models/UserModel.js";

const findIndex = (oldCartItems, productId) => {
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

    const cartProductIndex = findIndex(oldCartItems, productId);
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

// Order Controller
export const placeOrder = async (req, res) => {
  try {
    const { userId, productId, value } = req.body;
    const user = await UserModel.findById(userId);

    const oldOrdersItem = user.orders.items;
    const updatedOrdersItem = [...oldOrdersItem];

    const orderItemIndex = findIndex(oldOrdersItem, productId);
    orderItemIndex >= 0
      ? quantityChangeHandler(
          updatedOrdersItem,
          orderItemIndex,
          oldOrdersItem,
          value
        )
      : (updatedOrdersItem[0] = {
          product: productId,
          quantity: 1,
        });

    const updatedOrders = {
      items: updatedOrdersItem,
    };

    user.orders = updatedOrders;
    await user.save();
    const { orders } = await user
      .populate("orders.items.product")
      .execPopulate();
    res.json({ orders });
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (req, res) => {
  const { userId } = req.params;
  const user = await UserModel.findById(userId);
  const { orders } = await user.populate("orders.items.product").execPopulate();
  res.json({ orders });
};

export const deleteOrderItem = async (req, res) => {
  const { userId, productId } = req.params;
  const user = await UserModel.findById(userId);

  const oldOrderItems = user.orders.items;
  const updatedOrderItems = oldOrderItems.filter(
    (orderItem) => orderItem.product.toString() !== productId.toString()
  );

  const updatedOrder = {
    items: updatedOrderItems,
  };

  user.orders = updatedOrder;
  await user.save();
  const { orders } = await user.populate("orders.items.product").execPopulate();
  res.json({ orders });
};
