import User from "../model/User.js";

//TODO:
//UPDATE
export const updateUser = async(req,res)=>{
    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

    res.status(200).json(updateUser); 
}
//DELETE
//GET
//GET ALL