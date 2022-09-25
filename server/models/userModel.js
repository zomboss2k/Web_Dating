const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    fullname: {
      type: String,
      // required: true,
      trim: true, // loại bỏ khoảng trắng
      maxlength: 25,
      default: ""
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/zomboss/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661182037/test/rcu0hru5dhn7zg4fmcdz.jpg",
    },
    age: { type: Number, default: "" },
    gender: { type: String, default: "" },
    mobile: { type: String, default: "" },
    address: { type: String, default: "" },
    images: {
      type: Array,
      default: [
        "https://img.vn/uploads/danhmuc/australia-1564026865-dudpi.jpg",
        "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg",
      ],
    },
    desc: { type: String, default: "" },
    // followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    // following: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    // saved: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
