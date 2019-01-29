// Required modules
const cors = require('cors');
const express = require('express');

// App instance
const app = express();

// Set up middleware
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json({limit: '50mb'}));

// Controllers -- TBD (note: router needs to be before the catch-all)
app.use('/v1/bounties', require('./controllers/v1/bounties'));

// Catch all route
app.get('*', (req, res) => {
	res.status(404).send({ message: 'Not Found' });
});

// Listen!
app.listen(process.env.PORT || 3000, () => {
	console.log('api up and running');
});
