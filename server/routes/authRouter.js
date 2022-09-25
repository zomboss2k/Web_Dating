const router = require("express").Router();
const authCtrl = require("../controllers/authCtrl");
const verifyToken  = require("../middleware/auth");

router.post("/register", authCtrl.register);

router.post("/login", authCtrl.login);

// router.post("/logout", authCtrl.logout);

router.get("/", verifyToken, authCtrl.accessToken);

module.exports = router;
