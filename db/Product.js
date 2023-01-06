const mongoose = require('mongoose');


const ProductScheme =mongoose.Schema({
    name: String,
    // brand:String,
    price: String,
    category: String,
    userId: String,
    company: String,
})


module.exports = mongoose.model('product', ProductScheme)