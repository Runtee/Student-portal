const bcrypt = require('bcrypt')
const Adim = require('../models/userAdim')
const User = require('../models/user')
exports.registerUserView = (req, res) => {
    res.render('fresh', {
        errors: req.flash('validationErrors')
    })
}
exports.registerAdminView = (req, res) => {
    res.render('fresh adim', {
        errors: req.flash('validationErrors')
    })
}
exports.registerUser = async (req, res) => {
    await User.create(req.body, (error, user) => {

        if (error) {
            if (Object.keys(error.errors) == 'username') {
                const validationErrors = 'Username already exists'
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/adim/dashboard/fresh');
            }
            else {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/adim/dashboard/fresh');
            }



        }
        else {
            req.session.userId = user._id
            res.redirect('/register');
        }
    }
    )
}
exports.registerAdmin = async (req, res) => {
    await Adim.create(req.body, (error, adim) => {

        if (error) {
            if (Object.keys(error.errors) == 'username') {
                const validationErrors = 'Username already exists'
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/adim/fresh');
            }
            else {
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/adim/fresh');
            }



        }
        else {
            req.session.adimId = adim._id
            res.redirect('/adim');
        }
    }
    )
}
exports.loginView = (req, res) => {
    res.render('index', {
        errors: req.flash('validationErrors')
    })
}
exports.loginViewAdmin = (req, res) => {
    res.render('index adim', {
        errors: req.flash('validationErrors')
    })
}
exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id// if passwords match
                    // // store user session
                    res.redirect('/dashboard')
                }
                else {
                    const validationErrors = ['Password is incorrect']
                    req.flash('validationErrors', validationErrors)
                    req.flash('data', req.body)

                    res.redirect('/')
                }
            })
        }
        else {
            const validationErrors = ['Username is incorrect']
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            res.redirect('/')
        }
    })
}
exports.loginAdmin = (req, res) => {
    const { username, password } = req.body;
    Adim.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id// if passwords match
                    // // store user session
                    res.redirect('/adim/dashboard')
                }
                else {
                    const validationErrors = ['Password is incorrect']
                    req.flash('validationErrors', validationErrors)
                    req.flash('data', req.body)

                    res.redirect('/adim')
                }
            })
        }
        else {
            const validationErrors = ['Username is incorrect']
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            res.redirect('/adim')
        }
    })
}
exports.logout = (req, res) =>{
    req.session.destroy(() =>{
    res.redirect('/')
    })
    }
    exports.logoutAdmin = (req, res) =>{
        req.session.destroy(() =>{
        res.redirect('/admin')
        })
        }
        exports.registerUserDetailsView = (req, res) => {
            var firstName = ""
            var middleName = ""
            var surName = ""
            var email = ""
            var faculty = ""
            var department = ""
            var DOB = ""
            var sex = ""
            var phone = ""
            var parent = ""
            var state = ""
            var LGA = ""
            const data = req.flash('data');
            console.log(data)
            if (typeof data != "undefined") {
                firstName = data.firstName
                middleName = data.middleName
                surName = data.surName
                email = data.email
                faculty = data.faculty
                department = data.department
                DOB = data.DOB
                sex = data.sex
                phone = data.phone
                parent = data.parent
                state = data.state
                LGA = data.LGA
            }
            res.render('form', {
                errors: req.flash('validationErrors'),
                firstName: firstName,
                middleName: middleName,
                surName: surName,
                email: email,
                faculty: faculty,
                department: department,
                DOB: DOB,
                sex: sex,
                phone: phone,
                parent: parent,
                state: state,
                LGA: LGA
            })
        }
        exports.registerUserDetails = (req, res) => {

            let image = req.files.image;
            image.mv(path.resolve(__dirname, '..', 'public/images', image.name), async (error) => {
                await User.create({
                    ...req.body,
                    image: '/images/' + image.name,
                    userid: req.session.userId
                }, (error, user) => {
                    console.log(error)
                    if (error) {
                        const validationErrors = Object.keys(error.errors).map(key =>
                            error.errors[key].message)
                        req.flash('validationErrors', validationErrors)
                        req.flash('data', req.body)
                        return res.redirect('/register')
                    }
                })
                res.redirect('/adim/dashboard/fresh/successful')
            })
        
        
        
        }