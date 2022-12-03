const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    email :{type:String},
    password :{type:Number},
    // book : {type:mongoose.Schema.ObjectId, ref:"Book"}
});

module.exports = mongoose.model("Author", userSchema)