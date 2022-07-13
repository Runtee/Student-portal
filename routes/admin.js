const express = require("express")
const router = express.Router()

const coursesControllerAdim= require('../controllers/cosRegControllerAdim');
const welcomeControllerAdim = require('../controllers/welcomeControllerAdim');
const registerCosControllerAdim = require('../controllers/registerCosControllerAdim');
const coursesPostControllerAdim = require('../controllers/cosRegPostControllerAdim');
const registerCoursesControllerAdim = require('../controllers/registerCoursesControllerAdim');
const resultsControllerAdim = require('../controllers/resultsControllerAdim');
const resultStoreControllerAdim = require('../controllers/resultStoreControllerAdim');
const resultsPrintControllerAdim = require('../controllers/resultsInputControllerAdim');
const resultInputStore = require('../controllers/resultInputStore');
const studentsController = require('../controllers/studentsController');
const successUser = require('../controllers/successUser');
const passwordControllerAdim = require('../controllers/passwordControllerAdim');
const passwordCAdim = require('../controllers/passwordAdim');
const successfulPasswordAdim = require('../controllers/successfulPasswordAdim');
const newUserController = require("../controllers/newUserController");
const newUserStoreController = require("../controllers/newUserStoreController");
const freshController = require("../controllers/freshController");
const freshPost = require('../controllers/freshPost')

router.get('/register', newUserController)
router.post('/users/register',newUserStoreController)

router.get('/fresh', freshController)
router.post('/fresh/post',freshPost)

router.get('/adim/dashboard', welcomeControllerAdim)
router.get('/students', studentsController)
router.get('/adim/fresh/successful', successUser)

router.get('/change-password', passwordControllerAdim)
router.post('/change-password/store', passwordCAdim)
router.get('/change-password/successful', successfulPasswordAdim)

router.get('/courses', coursesControllerAdim)
router.post('/courses/post',coursesPostControllerAdim)
router.get('/course-registration/register', registerCosControllerAdim)
router.post('/course-registration/register/store',registerCoursesControllerAdim)
router.get('/result/', resultsControllerAdim)
router.post('/result/store', resultStoreControllerAdim)
router.get('/result/input',resultsPrintControllerAdim)
router.post('/result/input/store',resultInputStore)



// router.use('/users/register', validateMiddleWare)

module.exports = router
