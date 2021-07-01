import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/UserModel.js";
import { validateLogin, validateSignup } from "../util/schema.js";

export const signup = async (req, res) => {
  const { user } = req.body;
  const { name, email, password } = user;

  const { error } = validateSignup(user);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const findUser = await UserModel.findOne({ email: email });

  if (findUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const salt = await bcrypt.genSalt(1);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userModel = new UserModel({
    name,
    email,
    password: hashedPassword,
    cart: { items: [] },
  });

  let registeredUser;
  try {
    registeredUser = await userModel.save();
    const token = jwt.sign(
      { userId: registeredUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log("token", token);

    res.header("authorization", token).json({
      userId: registeredUser._id,
      email: registeredUser.email,
      name: registeredUser.name,
      token: token,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const login = async (req, res) => {
  const { user } = req.body;
  const { email, password } = user;

  const { error } = validateLogin({ email, password });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const findUser = await UserModel.findOne({ email: email });
  if (!findUser) {
    return res.status(400).json({ message: "Email does not exists" });
  }

  const isPasswordValid = await bcrypt.compare(password, findUser.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  const token = jwt.sign(
    { userId: findUser._id },
    process.env.ACCESS_TOKEN_SECRET
  );
  res.header("authorization", token).json({
    userId: findUser._id,
    email: findUser.email,
    name: findUser.name,
    token: token,
  });
};
