const router = require("express").Router();
const { authsController } = require("../controllers");

router.post("/register", authsController.registerAcc);

module.exports = router;
