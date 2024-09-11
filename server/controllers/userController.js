import User from "../model/User.js";

//TODO:
//UPDATE
export const updateUser = async (req, res) => {
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
    res.status(500).json(error);
  }
};

//DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
//GET
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
//GET ALL
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
