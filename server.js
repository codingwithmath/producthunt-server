const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


mongoose.set('useFindAndModify', false);

// start the db
mongoose.connect("mongodb://localhost:27017/nodeapi", {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch({});

requireDir('./src/models');

app.use('/producthunt/api', require('./src/routes'));

app.listen(3333);