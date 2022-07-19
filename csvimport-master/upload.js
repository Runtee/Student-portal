var {parse} = require('fast-csv');
var Author = require('./author');
var { Readable } = require('stream')
exports.post = function (req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	var authorFile = req.files.file.data.toString();
	// const stream = Readable.from(authorFile);
	var authors = [];
	const stream = parse({ headers: true })
		.on('error', error => console.error(error))
		.on('data', data => {
			authors.push(data)
		})
		.on('end', () => {
			Author.create(authors, function (err, documents) {
				if (err) throw err;

				res.send(authors.length + ' authors have been successfully uploaded.');
			})
			console.log(authors);
		});
		stream.write(authorFile);
		stream.end();
}
