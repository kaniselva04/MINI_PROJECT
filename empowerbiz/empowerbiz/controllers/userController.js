import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully!", token });
  } catch (error) {
    res.status(500).json({ success: false, error: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ success: false, error: "Login failed" });
  }
};

export const logout = (req, res) => {
  res.status(200).json({ message: "Logout successful" });
};

export const addToSaveList = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.saveList.includes(itemId)) {
      user.saveList.push(itemId);
      await user.save();
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Item added to save list",
        saveList: user.saveList,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to add item to save list" });
  }
};

export const removeFromSaveList = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.saveList = user.saveList.filter((id) => id !== itemId);
    await user.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Item removed from save list",
        saveList: user.saveList,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to remove item from save list" });
  }
};

export const getSavedList = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("saveList");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    res.json({ success: true, savedList: user.saveList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
