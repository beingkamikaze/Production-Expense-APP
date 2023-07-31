const userModel = require("../models/userModel");
//crud
// login callback
const logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body; //destructure
    const user = await userModel.findOne({ email, password }); // email and password have same key value pair there ek hin function se kaam chal jayega
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: false,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//register callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { logincontroller, registerController };
