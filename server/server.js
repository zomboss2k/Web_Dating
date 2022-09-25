require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Ket noi den database
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Đã kết nối với MongoDB");
  }
);

app.use(express.json())
app.use(cors())
app.use('/api', require('./routes/authRouter'))
app.use('/api', require('./routes/userRouter'))
app.use('/api', require('./routes/postRouter'))



const PORT = 5000;

app.listen(PORT, () => console.log(`Server đang chạy với cổng ${PORT}`));
