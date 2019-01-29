// Require mongoose
const mongoose = require('mongoose');

// Connect to mongodb via mongoose
// NOTE: Heroku mongo addon creates this environment variable: MONGODB_URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', { useNewUrlParser: true });

// Include and export all modesl in this folder
// NOTE: Include as many as needed in this same format
module.exports.Bounty = require('./bounty');