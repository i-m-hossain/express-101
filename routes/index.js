const express = require("express")
const router = express.Router()
const baseController = require('../controllers/baseControllers')

router.get("/", baseController.greeting )
router.get("/about", baseController.about )
router.get("/contact", baseController.contact)

module.exports = router