const express = require('express');
const bodyParser = require('body-parser');

const act = require('./routes/act'); // Imports routes for the acts
const app = express();

const { DB_USERNAME_ML, DB_PASSWORD_ML } = process.env;

// MongoDB
const mongoose = require('mongoose');

let mongoDB = `mongodb://${DB_USERNAME_ML}:${DB_PASSWORD_ML}@ds155164.mlab.com:55164/tpr-acts-rater`;

mongoose.connect(mongoDB, { useNewUrlParser: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/acts', act);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
