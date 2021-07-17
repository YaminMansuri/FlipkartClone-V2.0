import UserModel from "../models/UserModel.js";

const findItemIndex = (oldItems, productId) => {
  return oldItems.findIndex((oldItem) => {
    if (!oldItem.product) return -1;
    return oldItem.product.toString() === productId.toString();
  });
};

const quantityChangeHandler = (updatedItems, index, oldItems, value = 1) => {
  return (updatedItems[index].quantity = oldItems[index].quantity + value);
};

const addItem = (updatedItems, productId, type) => {
  if (type === "push")
    return updatedItems.push({
      product: productId,
      quantity: 1,
    });
  else if (type === "set")
    return (updatedItems[0] = {
      product: productId,
      quantity: 1,
    });
};

const deleteItem = (oldItems, productId) => {
  return oldItems.filter(
    (oldItem) => oldItem.product.toString() !== productId.toString()
  );
};

const updateItems = (updatedItems) => {
  return { items: updatedItems };
};

const findUser = async (data) => {
  const { userId, productId, value } = data;
  const user = await UserModel.findById(userId);
  return { user, productId, value };
};

export const addToCart = async (req, res) => {
  try {
    const { user, productId, value } = await findUser(req.body);

    const oldCartItems = user.cart.items;
    const updatedCartItems = [...oldCartItems];

    const cartProductIndex = findItemIndex(oldCartItems, productId);
    cartProductIndex >= 0
      ? quantityChangeHandler(
          updatedCartItems,
          cartProductIndex,
          oldCartItems,
          value
        )
      : addItem(updatedCartItems, productId, "push");

    const updatedCart = updateItems(updatedCartItems);

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
  try {
    const { user } = await findUser(req.params);
    const { cart } = await user.populate("cart.items.product").execPopulate();
    res.json({ cartItems: cart });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { user, productId } = await findUser(req.params);
    const oldCartItems = user.cart.items;

    const updatedCartItems = deleteItem(oldCartItems, productId);

    const updatedCart = updateItems(updatedCartItems);

    user.cart = updatedCart;
    await user.save();
    const { cart } = await user.populate("cart.items.product").execPopulate();
    res.json({ cartItems: cart });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Order Controller
export const placeOrder = async (req, res) => {
  try {
    const { user, productId, value } = await findUser(req.body);

    const oldOrdersItem = user.orders.items;
    const updatedOrdersItem = [...oldOrdersItem];

    const orderItemIndex = findItemIndex(oldOrdersItem, productId);
    orderItemIndex >= 0
      ? quantityChangeHandler(
          updatedOrdersItem,
          orderItemIndex,
          oldOrdersItem,
          value
        )
      : addItem(updatedOrdersItem, productId, "set");

    const updatedOrders = updateItems(updatedOrdersItem);

    user.orders = updatedOrders;
    await user.save();
    const { orders } = await user
      .populate("orders.items.product")
      .execPopulate();
    res.json({ orderItems: orders });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getOrders = async (req, res) => {
  try {
    const { user } = await findUser(req.params);
    const { orders } = await user
      .populate("orders.items.product")
      .execPopulate();
    res.json({ orderItems: orders });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteOrderItem = async (req, res) => {
  try {
    const { user, productId } = await findUser(req.params);
    const oldOrderItems = user.orders.items;

    const updatedOrderItems = deleteItem(oldOrderItems, productId);

    const updatedOrder = updateItems(updatedOrderItems);

    user.orders = updatedOrder;
    await user.save();
    const { orders } = await user
      .populate("orders.items.product")
      .execPopulate();
    res.json({ orderItems: orders });
  } catch (error) {
    res.status(400).json({ error });
  }
};
