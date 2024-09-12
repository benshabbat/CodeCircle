import User from "../model/User.js";

//TODO:
//UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,

      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    // next(createError(500,error));
    res.status(500).json(error);
  }
};

//DELETE
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    // next(createError(500,error));
    res.status(500).json(error);
  }
};
//GET
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    // next(createError(500,error));
    res.status(500).json(error);
  }
};
//GET ALL
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    // next(createError(500,error));
    res.status(500).json(error);
  }
};
