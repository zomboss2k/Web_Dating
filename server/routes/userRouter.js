const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const verifyToken = require("../middleware/auth");

router.get("/getUser", verifyToken, userCtrl.getUser);

router.get("/getUser/:id", verifyToken, userCtrl.getOneUser);

router.put("/updateUser/", verifyToken, userCtrl.updateUser);

// router.delete("/deletePost/:id", verifyToken, userCtrl.deletePost);

module.exports = router;