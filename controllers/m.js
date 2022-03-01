const bcrypt = require('bcrypt')
var newPassword ='2017/243586'
var k = bcrypt.hash(newPassword, 10)
console.log(k);