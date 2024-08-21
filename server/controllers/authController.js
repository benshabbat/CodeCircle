import User from "../model/User";
import bcryptjs from 'bcryptjs'
export const register = async(req,res)=>{
    const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("all fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24h
    });

    await newUser.save();

    generateTokenAndSetCookie(res,newUser._id);

    res.status(201).json({
        success: true,
        message: 'User Created Successfully',
        user:{
            ...newUser._doc,
            password: undefined,
        }
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
export const login = (req,res)=>{
    console.log(res.data)
}
export const logout = (req,res)=>{
    console.log(res.data)
}