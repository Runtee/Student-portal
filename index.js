const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const flash = require('connect-flash');
const expressSession = require('express-session');

app.use(express.json())
app.use(express.urlencoded())
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
app.use(fileUpload())
mongoose.connect('mongodb://localhost/StudentPortal', { useNewUrlParser: true, useUnifiedTopology: true });


// const homeController = require('./controllers/home')
const newUserController = require('./controllers/newUserController')
const userStoreController = require('./controllers/newUserStoreController')
const loginController = require('./controllers/loginController')
const loginUser = require('./controllers/loginUser')
const freshController = require('./controllers/freshController')
const freshPost = require('./controllers/freshPost')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
// const validationMiddleware = require('./middleware/validationMiddleware')
const welcomeController = require('./controllers/welcomeController');
const profileController = require('./controllers/profileController');
const schoolfeesController = require('./controllers/schoolFeesController');
const schoolfeesPostController = require('./controllers/schoolFeesPostController');
const schoolfeeInvoiceController = require('./controllers/schoolfeeInvoiceController');
const hostelController = require('./controllers/hostelController');
const hostelPostController = require('./controllers/hostelPostController');
const hostelInvioceController = require('./controllers/hostelInvioceController');
const cosRegController = require('./controllers/cosRegController');
const printCosController = require('./controllers/printCosController'); 
const registerCosController = require('./controllers/registerCosController');
const cosRegPostController = require('./controllers/cosRegPostController');
const registerCoursesController = require('./controllers/registerCoursesController');
const resultsController = require('./controllers/resultsController');
const resultStoreController = require('./controllers/resultStoreController');
const resultsPrintController = require('./controllers/resultsPrintController');
const profilePostController = require('./controllers/profilePostController');
const passwordController = require('./controllers/passwordController');
const passwordC = require('./controllers/password');
const successfulPassword = require('./controllers/successfulPassword');


const coursesControllerAdim= require('./controllers/cosRegControllerAdim');
const loginUserAdim = require('./controllers/loginUserAdim')
const freshControllerAdim = require('./controllers/freshControllerAdim')
const freshPostAdim = require('./controllers/freshPostAdim')
const welcomeControllerAdim = require('./controllers/welcomeControllerAdim');
const loginControllerAdim = require('./controllers/loginControllerAdim') 
const registerCosControllerAdim = require('./controllers/registerCosControllerAdim');
const coursesPostControllerAdim = require('./controllers/cosRegPostControllerAdim');
const registerCoursesControllerAdim = require('./controllers/registerCoursesControllerAdim');
const resultsControllerAdim = require('./controllers/resultsControllerAdim');
const resultStoreControllerAdim = require('./controllers/resultStoreControllerAdim');
const resultsPrintControllerAdim = require('./controllers/resultsInputControllerAdim');
const resultInputStore = require('./controllers/resultInputStore');
const studentsController = require('./controllers/studentsController');
const successUser = require('./controllers/successUser');
const passwordControllerAdim = require('./controllers/passwordControllerAdim');
const passwordCAdim = require('./controllers/passwordAdim');
const successfulPasswordAdim = require('./controllers/successfulPasswordAdim');


const logoutController = require('./controllers/logout')
const logoutControllerAdim = require('./controllers/logoutAdim')

// const flash = require('connect-flash');


app.set('view engine', 'ejs')
app.use("/public", express.static(path.join(__dirname, 'public')))
app.listen(3000, () => {
    console.log('App listening on port 3000')
})
app.use(expressSession({
    secret: 'keyboard cat'
}))
// app.get('/',(req,res)=>{
//     res.render('profile')
// })





app.use(flash());
app.get('/', loginController)
app.post('/login/auth',loginUser)

app.get('/dashboard',authMiddleware, welcomeController)
app.get('/dashboard/profile',authMiddleware, profileController)
app.get('/dashboard/schoolfees',authMiddleware, schoolfeesController)
app.post('/dashboard/paySchoolfees',schoolfeesPostController)
app.get('/dashboard/Schoolfees/invoice',authMiddleware, schoolfeeInvoiceController)
app.get('/dashboard/hostel',authMiddleware, hostelController)
app.post('/profilePost',authMiddleware,profilePostController)
app.post('/dashboard/hostelInvoice',hostelPostController)
app.get('/dashboard/hostel/invoice',authMiddleware, hostelInvioceController);
app.get('/dashboard/course-registration',authMiddleware, cosRegController)
app.post('/dashboard/course-registration/post',cosRegPostController)
app.get('/dashboard/course-registration/register',authMiddleware, registerCosController)
app.post('/dashboard/course-registration/register/store',registerCoursesController)
app.get('/dashboard/course-registration/print',authMiddleware, printCosController)
app.get('/dashboard/result/',authMiddleware, resultsController)
app.post('/dashboard/result/store',authMiddleware, resultStoreController)
app.get('/dashboard/change-password',authMiddleware, passwordController)
app.post('/dashboard/change-password/store',authMiddleware, passwordC)
app.get('/dashboard/change-password/successful',authMiddleware, successfulPassword)




app.get('/register', newUserController)
app.get('/adim/dashboard/fresh', freshController)
app.post('/fresh/post',freshPost)
app.get('/adim', loginControllerAdim)
app.post('/adim/login/auth',loginUserAdim)
app.get('/adim/fresh', freshControllerAdim)
app.post('/adim/fresh/post',freshPostAdim)
app.get('/adim/dashboard', welcomeControllerAdim)
app.get('/adim/dashboard/students', studentsController)
app.get('/adim/fresh/successful', successUser)

app.get('/adim/dashboard/change-password', passwordControllerAdim)
app.post('/adim/dashboard/change-password/store', passwordCAdim)
app.get('/adim/dashboard/change-password/successful', successfulPasswordAdim)

app.get('/adim/dashboard/courses', coursesControllerAdim)
app.post('/adim/dashboard/courses/post',coursesPostControllerAdim)
app.get('/adim/dashboard/course-registration/register', registerCosControllerAdim)
app.post('/adim/dashboard/course-registration/register/store',registerCoursesControllerAdim)
app.get('/adim/dashboard/result/', resultsControllerAdim)
app.post('/adim/dashboard/result/store', resultStoreControllerAdim)
app.get('/adim/dashboard/result/input',resultsPrintControllerAdim)
app.post('/adim/dashboard/result/input/store',resultInputStore)
app.get('/auth/logout',logoutController)
app.get('/adim/auth/logout',logoutControllerAdim)

const validateMiddleWare = require('./middleware/validationMiddleware')

// app.use('/users/register', validateMiddleWare)
app.post('/users/register',userStoreController)



// global.loggedIn = null;
// app.use("*", (req, res, next) => {
//     loggedIn = req.session.userId;
//     next()
// });