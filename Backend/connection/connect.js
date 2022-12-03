const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookListApi")
.then(()=>console.log("Databse connected!!"))
.catch((e)=>console.log(e.message))