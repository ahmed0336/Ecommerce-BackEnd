// local ya live ka path and connect with database of mongodb
const mongoose = require('mongoose');
mongoose.set('strictQuery' ,false);

mongoose.connect("mongodb://127.0.0.1/ecommerce")