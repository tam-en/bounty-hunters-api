// Require modules
const express = require('express');

// Declare router instance
const router = express.Router();

// Include models
const db = require('../../models');

// Define routes
router.get('/', (req, res) => {
	//res.send('Western Stubby!');
	db.Bounty.find()
	.then(bounties => {
		res.send(bounties);
	})
	.catch(err => {
		console.log(err);
		res.status(500).send({ message: 'Server Error' });
	});
});

router.post('/', (req, res) => {
	//res.send('post reached!');
	// Array data sent as a string; parse it
	req.body.hunters = JSON.parse(req.body.hunters);
	db.Bounty.create(req.body)
	.then((bounty) => {
		res.status(201).send(bounty);
	})
	.catch(err => {
		console.log(err);
		res.status(500).send({ message: 'Server Error' });
	});
});

router.get('/:id', (req, res) => {
	//res.send('GET /:id reached!');
	db.Bounty.findById(req.params.id)
	.then(bounty => {
		res.send(bounty);
	})
	.catch(err => {
		console.log(err);
		res.status(500).send({ message: 'Server Error' });
	});
});

router.put('/:id', (req, res) => {
	res.send('put western stubby');
})

router.delete('/:id', (req, res) => {
	//res.send('DELETE /:id reached!');
	db.Bounty.findOneAndDelete({ _id: req.params.id })
	.then(() => {
		res.status(204).send( { message: 'Successful Deletion'} );
	})
	.catch(err => {
		console.log(err);
		res.status(500).send({ message: 'Server Error' });
	});
});

// Export this router to be included by index.js, or whatever else
module.exports = router;
