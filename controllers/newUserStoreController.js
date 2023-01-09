const path = require('path');
const RegNumber = require('../models/regNumber.js');
const User = require('../models/StudentInfo.js')


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
// exports.registerUserDetails = async (req, res) => {

//     let image = req.files.image;
//     let { year } = req.body
//     let regNumber = await createRegNumber(Number(year))
//     image.mv(path.resolve(__dirname, '..', 'public/images', image.name), async (error) => {
//         await User.create({
//             ...req.body,
//             image: '/images/' + image.name,
//             "login.username": regNumber,
//             "login.password": regNumber,
//             regNo: regNumber
//         }, (error, user) => {
//             console.log(error)
//             if (error) {
//                 await removeRegNumber()
//                 const validationErrors = Object.keys(error.errors).map(key =>
//                     error.errors[key].message)
//                 req.flash('validationErrors', validationErrors)
//                 req.flash('data', req.body)
//                 return res.redirect('/register')
//             }; 
//             res.redirect('/adim/dashboard/fresh/successful')
//         })

//     })



// }
module.exports = async (req, res) => {
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


