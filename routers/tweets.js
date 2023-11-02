const { tweetsController } = require("../controllers")
const router = require("express").Router()

router.get("/", tweetsController.getData);
router.post("/create", tweetsController.postContent)
router.put('/update/:userId', tweetsController.modifyTweet)
router.patch("/update/:userId", tweetsController.modifyTweet)
router.delete('/:userId', tweetsController.deletePost)

module.exports = router;