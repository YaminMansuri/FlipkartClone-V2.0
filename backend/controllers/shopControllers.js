import UserModel from "../models/UserModel.js";

const incrementQuantity = (updatedCartItems, index, oldCartItems) => {
  return (updatedCartItems[index].quantity = ++oldCartItems[index].quantity);
};

const pushCartItem = (updatedCartItems, productId) => {
  return updatedCartItems.push({
    productId,
    quantity: 1,
  });
};

export const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await UserModel.findById(userId);

    const oldCartItems = user.cart.items;
    console.log("cartItems", oldCartItems);

    const cartProductIndex = oldCartItems.findIndex((cartProduct) => {
      if (!cartProduct.productId) return -1;
      return cartProduct.productId.toString() === productId.toString();
    });
    console.log(cartProductIndex);
    const updatedCartItems = [...oldCartItems];

    cartProductIndex >= 0
      ? incrementQuantity(updatedCartItems, cartProductIndex, oldCartItems)
      : pushCartItem(updatedCartItems, productId);

    const updatedCart = {
      items: updatedCartItems,
    };

    user.cart = updatedCart;
    await user.save();
    const cartItems = user.cart;
    res.json({ cartItems });
  } catch (error) {
    console.log("Error!!!", error);
    res.status(400).json({ error });
  }
};

export const getCart = async (req, res) => {
  const { userId } = req.params;
  const user = await UserModel.findById(userId).select("cart");
  const cartItems = await user.populate("cart.items.productId").execPopulate();
  res.json({ cartItems });
};
