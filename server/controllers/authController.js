import User from "../model/User.js";
import bcryptjs from "bcryptjs";
// import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
// import { createError } from "../utils/error.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExist = await User.findOne({ email });

  // if(userExist) return createError /// TODO: to use with function of createError

  if (userExist) {
    return res
      .status(409)
      .json({ success: false, message: "User already exists" });
  }

  //hash for password with bcrypt algorithm
  const hashedPassword = await bcryptjs.hash(password, 12);

  const newUser = User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, password: newUser.password});
};


export const login = async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if(!user){
    res.status(401).json({ success: false, message: "User not found" });
  }
  const isPassword = await bcryptjs.compare(password,user.password)
  if(!isPassword) {res.status(401).json({ success: false, message: "Email or password is wrong" });}

  
  res.json(user);
};



export const logout = (req, res) => {
  console.log(res.data);
};
