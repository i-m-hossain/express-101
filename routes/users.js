const express = require('express')
const router = express.Router()
const usersHandler = require('../controllers/usersController')

router.get('/', usersHandler.usersList)
router.get('/:userId', usersHandler.singleUser)

module.exports = router