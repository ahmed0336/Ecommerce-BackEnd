const mongoose = require("mongoose");

const UserSchema = new  mongoose.Schema({
   
    name:String,
    email:String,
    password:String,
})

module.exports = mongoose.model("users",UserSchema);
// model=>table name