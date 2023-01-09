const bcrypt = require('bcrypt')
const Adim = require('../models/userAdim')
const User = require('../models/user')
const RegNumber = require('../../models/regNumber')
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
    User.findOne({ "login.username": username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.login.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id// if passwords match
                    // // store user session
                    req.session.user = user
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
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}
exports.logoutAdmin = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/admin')
    })
}
exports.registerUserDetailsView = (req, res) => {
    const data = req.flash('data');
    firstName = data?.firstName ? data.firstName : ""
    middleName = data?.middleName ? data.middleName : ""
    surName = data?.surName ? data.surName : ""
    email = data?.email ? data.email : ""
    faculty = data?.faculty ? data.faculty : ""
    department = data?.department ? data.department : ""
    DOB = data?.DOB ? data.DOB : ""
    sex = data?.sex ? data.sex : ""
    phone = data?.phone ? data.phone : ""
    parent = data?.parent ? data.parent : ""
    state = data?.state ? data.state : ""
    LGA = data?.LGA ? data.LGA : ""

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
async function createRegNumber(year) {
    var lastReg = await RegNumber.findOne({ year: year });
    if (!lastReg) {
        lastReg = await RegNumber.create({ year },{new:true})
        lastReg = await RegNumber.findOne({ year: year });
    }
    let newNumb = Number(lastReg.numb) + 1
    var format = "00000" + newNumb;
    regNum = String(year) + '/' + format.substring(format.length - 6)
    lastReg.numb = newNumb
    lastReg.save()
    return regNum
}
async function removeRegNumber(year) {
    var lastReg = RegNumber.findOne({ year: year });
    if (!lastReg) {
        return
    }
    let newNumb = Number(lastReg.numb) - 1
    lastReg.numb = newNumb
    lastReg.save()
    return regNum
}
exports.registerUserDetails = async (req, res) => {
try{
    let image = req.files.image;
    let { year } = req.body
    if (!year){
        req.flash("validationErrors", 'year not provided')
        res.redirect('/register')
    }
    let regNumber = await createRegNumber(Number(year))
    image.mv(path.resolve(__dirname, '..', 'public/images', image.name), async (error) => {
        await User.create({
            ...req.body,
            image: '/images/' + image.name,
            "login.username": regNumber,
            "login.password": regNumber,
            regNo: regNumber
        }, async (error, user) => {
            console.log(error)
            if (error) {
                await removeRegNumber()
                const validationErrors = Object.keys(error.errors).map(key =>
                    error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/register')
            }; 
            res.render('successAccount')
        })

    })

}
catch(error){
    req.flash('validationErrors',error)
    res.redirect('/register')
}
    

}