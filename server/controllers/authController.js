import User from "../model/User.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import { createError } from "../utils/error.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExist = await User.findOne({ email });

  // if(userExist) return createError /// TODO: to use with function of createError

  if (userExist) {
    return res.status(409)
      .json({ success: false, message: "User already exists" });
  }

  //hash for password with bcrypt algorithm
  const hashedPassword = await bcrypt.hash(password,12)


};
export const login = (req, res) => {
  console.log(res.data);
};
export const logout = (req, res) => {
  console.log(res.data);
};
