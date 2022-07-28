const express = require("express")
const router = express.Router()

const cosRegController = require("../controllers/cosRegController")
const cosRegPostController = require("../controllers/cosRegPostController")
const hostelController = require("../controllers/hostelController")
const hostelPostController = require("../controllers/hostelPostController")
const password = require("../controllers/password")
const passwordController = require("../controllers/passwordController")
const printCosController = require("../controllers/printCosController")
const profileController = require("../controllers/profileController")
const profilePostController = require("../controllers/profilePostController")
const registerCosController = require("../controllers/registerCosController")
const registerCoursesController = require("../controllers/registerCoursesController")
const resultsController = require("../controllers/resultsController")
const resultStoreController = require("../controllers/resultStoreController")
const schoolfeeInvoiceController = require("../controllers/schoolfeeInvoiceController")
const schoolFeesPostController = require("../controllers/schoolFeesPostController")
const successfulPassword = require("../controllers/successfulPassword")
const welcomeController = require("../controllers/welcomeController")
const authMiddleware = require("../middleware/authMiddleware")
 
router.get('/',authMiddleware, welcomeController)
router.get('/profile',authMiddleware, profileController)
router.get('/schoolfees',authMiddleware, schoolfeesController)
router.post('/paySchoolfees',schoolFeesPostController)
router.get('/Schoolfees/invoice',authMiddleware, schoolfeeInvoiceController)
router.get('/hostel',authMiddleware, hostelController)
router.post('/profilePost',authMiddleware,profilePostController)
router.post('/hostelInvoice',hostelPostController)
router.get('/hostel/invoice',authMiddleware, hostelInvioceController);
router.get('/course-registration',authMiddleware, cosRegController)
router.post('/course-registration/post',cosRegPostController)
router.get('/course-registration/register',authMiddleware, registerCosController)
router.post('/course-registration/register/store',registerCoursesController)
router.get('/course-registration/print',authMiddleware, printCosController)
router.get('/result/',authMiddleware, resultsController)
router.post('/result/store',authMiddleware, resultStoreController)
router.get('/change-password',authMiddleware, passwordController)
router.post('/change-password/store',authMiddleware, password)
router.get('/change-password/successful',authMiddleware, successfulPassword)

module.exports = router