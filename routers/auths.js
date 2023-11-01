const router = require("express").Router();
const { authsController } = require("../controllers");

router.get("/", authsController.getData);
router.post("/register", authsController.registerAcc);
router.get("/login", authsController.login);
router.patch("/:id", authsController.update);

module.exports = router