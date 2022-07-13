const express = require("express")
const loginController = require("../controllers/loginController")
const loginControllerAdim = require("../controllers/loginControllerAdim")
const loginUser = require("../controllers/loginUser")
const loginUserAdim = require("../controllers/loginUserAdim")
const logoutController = require('./controllers/logout')
const logoutControllerAdim = require('./controllers/logoutAdim')
const router = express.Router()


router.get('/adim', loginControllerAdim)
router.post('/adim/login/auth',loginUserAdim)
router.get('/', loginController)
router.post('/login/auth',loginUser)
router.get('/auth/logout',logoutController)
router.get('/adim/auth/logout',logoutControllerAdim)

module.exports = router