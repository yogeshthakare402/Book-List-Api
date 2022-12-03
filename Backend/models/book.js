const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    title : {type:String},
    author : {type:String},
    isbn  : {type:String},
    publisher  : {type:String},
    publishedDate  : {type:String},
    description  : {type:String},
});

module.exports = mongoose.model("Book", bookSchema)