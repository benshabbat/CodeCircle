import User from "../model/User";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
export const register = async (req, res) => {
  const { firstName,lastName,email,password}= req.body;

  const userExist = await User.findOne({email});
  
  if(userExist) return 
};
export const login = (req, res) => {
  console.log(res.data);
};
export const logout = (req, res) => {
  console.log(res.data);
};
