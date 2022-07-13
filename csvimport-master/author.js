var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Stu', { useNewUrlParser: true });

var authorSchema = mongoose.Schema({
	name: {
		firstName: {
			type: String,
			required: true
		},
		lastName: String
	},
	biography: String,
	twitter: {
		type: String,
		// validate: {
		// 	validator: function(text) {
		// 		if (text !== null && text.length > 0)
		// 			return text.indexOf('https://twitter.com/') === 0;

		// 		return true;
		// 	},
		// 	message: 'Twitter handle must start with https://twitter.com/'
		// }
	},
	facebook: {
		type: String,
		// validate: {
		// 	validator: function(text) {
		// 		if (text !== null && text.length > 0)
		// 			return text.indexOf('https://www.facebook.com/') === 0;

		// 		return true;
		// 	},
		// 	message: 'Facebook Page must start with https://www.facebook.com/'
		// }
	},
	linkedin: {
		type: String,
		// validate: {
		// 	validator: function(text) {
		// 		if (text !== null && text.length > 0)
		// 			return text.indexOf('https://www.linkedin.com/') === 0;

		// 		return true;
		// 	},
		// 	message: 'LinkedIn must start with https://www.linkedin.com/'
		// }
	},
	profilePicture: Buffer,
	created: {
		type: Date,
		default: Date.now
	}
});

var Author = mongoose.model('Author', authorSchema);


// Author.create([{ name: { firstName: "kkkk", lastName: "kkkk" }, biography: "kkkk", twitter: "kkkk", facebook: "kkkk", linkedin: "kkkk" },
//  { name: { firstName: "kkkk", lastName: "kkkk" }, biography: "kkkk", twitter: "kkkk", facebook: "kkkk", linkedin: "kkkk" },
//   { name: { firstName: "kkkk", lastName: "kkkk" }, biography: "kkkk", twitter: "kkkk", facebook: "kkkk", linkedin: "kkkk" }]
//  ,function(err, documents) {
// 	if (err) throw err;} 
//   )
module.exports = Author;