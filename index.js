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



const logoutController = require('./controllers/logout')
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

app.get('/register',authMiddleware, newUserController) 
app.get('/', loginController)
app.post('/login/auth',loginUser)
app.get('/fresh', freshController)
app.post('/fresh/post',freshPost)
app.get('/dashboard',authMiddleware, welcomeController)
app.get('/dashboard/profile',authMiddleware, profileController)
app.get('/dashboard/schoolfees',authMiddleware, schoolfeesController)
app.post('/dashboard/paySchoolfees',schoolfeesPostController)
app.get('/dashboard/Schoolfees/invoice',authMiddleware, schoolfeeInvoiceController)
app.get('/dashboard/hostel',authMiddleware, hostelController)
app.post('/dashboard/hostelInvoice',hostelPostController)
app.get('/dashboard/hostel/invoice',authMiddleware, hostelInvioceController);
app.get('/dashboard/course-registration',authMiddleware, cosRegController)
app.post('/dashboard/course-registration/post',cosRegPostController)
app.get('/dashboard/course-registration/register',authMiddleware, registerCosController)
app.post('/dashboard/course-registration/register/store',registerCoursesController)
app.get('/dashboard/course-registration/print',authMiddleware, printCosController)
app.get('/dashboard/result/',authMiddleware, resultsController)
app.post('/dashboard/result/store',authMiddleware, resultStoreController)
app.get('/dashboard/result/print',authMiddleware, resultsPrintController)


app.get('/auth/logout',logoutController)

const validateMiddleWare = require('./middleware/validationMiddleware')

app.use('/users/register', validateMiddleWare)
app.post('/users/register',userStoreController)



// global.loggedIn = null;
// app.use("*", (req, res, next) => {
//     loggedIn = req.session.userId;
//     next()
// });