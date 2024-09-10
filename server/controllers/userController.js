import User from "../model/User.js";

//TODO:
//UPDATE
export const updateUser = async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );

  res.status(200).json(updateUser);
};

//DELETE
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "deleted successfully" });
};
//GET
export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
}
//GET ALL
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}
