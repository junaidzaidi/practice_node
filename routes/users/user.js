const express = require('express')
const router = express.Router()
const controller = require('../../controllers/users/user')

router.get('/', controller.getAllUsers)
router.get('/:userId', controller.getUserById)

module.exports = router