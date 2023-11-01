const router = require("express").Router();
const { authsController } = require("../controllers");

router.get("/", authsController.getData);
router.get("/login", authsController.login);
router.patch("/:id", authsController.update);

module.exports = router