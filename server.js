const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/Space-Shooter');
var port = 3000;

const authRouter = require(__dirname + '/routes/auth_routes');
const publicRouter = require(__dirname + '/routes/public_routes');

app.use('/api' , authRouter);
// app.use(publicRouter);
module.exports.server = app.listen(port, () => console.log('Server running ' + port));//eslint-disable-line
