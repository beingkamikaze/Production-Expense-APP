const express = require('express')
const { logincontroller, registerController } = require('../controllers/userController')

//router object
const router = express.Router()
//routers
//POST || LOGIN
router.post('/login',logincontroller)

//POST || REGISTER || SIGNUP
router.post('/register',registerController)

module.exports = router