import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/user.model.js";

// signUp func
export const signUp = async (req, res) => {
  // get json payload
  const { firstName, lastName, email, password } = req.body;

  // validate form fields
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: "form validation error!",
      success: false,
    });
  }

  // signup user
  try {
    const getUser = await User.findOne({ email });

    if (getUser) {
      return res.status(400).json({
        message: "user already exists!",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    user.save();

    // success
    return res.status(201).json({
      message: "new user created successfully!",
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      message: "sign up error!",
      success: false,
      err: err.message,
    });
  }
};

// sign in
export const signIn = async (req, res) => {
  // fetch payload
  const email = req.body.email;
  const passkey = req.body.password;

  try {
    const user = await User.findOne({ email });

    // validation
    if (!user) {
      return res.status(400).json({
        message: "email doesnot exist!",
        success: false,
      });
    }

    const isValidPassword = await bcrypt.compare(passkey, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        message: "invalid password!",
        success: false,
      });
    }

    // signing in
    const { password, ...rest } = user.toObject();

    const token = jwt.sign(
      {
        id: rest.id,
        isAdmin: rest.isAdmin || false,
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).cookie("access_token", token).json({
      message: "user signed in!",
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      message: "sign in error",
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};
