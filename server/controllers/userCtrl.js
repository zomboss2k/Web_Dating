const User = require("../models/userModel");

const userCtrl = {
  // @Router GET api/getUser
  // @Desc Get all user
  // @Access Private
  getUser: async (req, res) => {
    try {
      const users = await User.find({ users: req.userId });
      res.json({ success: true, users });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getOneUser: async (req, res) => {
    try {
      const users = await User.findById(req.params.id).populate([
        "fullname",
        "email",
        "avatar",
        "age",
        "gender",
        "mobile",
        "address",
        "images",
        "desc",
      ]);
      if (!users)
        return res.status(400).json({ msg: "Người dùng không tồn tại" });

      res.json({ success: true, users });
    } catch (err) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // @Router PUT api/updateUser
  // @Desc Update a new user
  // @Access Private
  updateUser: async function (req, res) {
    const {
      fullname,
      email,
      avatar,
      age,
      gender,
      mobile,
      address,
      images,
      desc,
    } = req.body;

    if (!fullname)
      return res.status(400).json({ msg: "Please add your full name." });
    try {
      await User.findOneAndUpdate(
        { _id: req.userId },
        {
          fullname,
          email,
          avatar,
          age,
          gender,
          mobile,
          address,
          images,
          desc,
        }
      );

      res.json({ msg: "Update Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
