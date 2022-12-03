const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const connect = require("./connection/connect");
const loginRoutes = require("./routes/login");
const addBooksRoutes = require ("./routes/addBooks");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secret = "RESTAPI"

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/authors/books", (req,res,next)=>{
    try{
        if(req.headers.authorization){
            const token = req.headers.authorization;
            if(token){
                jwt.verify(token, secret,(err, decoded)=>{
                    if(err){
                        return res.status(400).json({
                            status:"Failed",
                            message:"Token is invalid"
                        })
                    }
                    res.author = decoded.data;
                    next()
                })
            }
        }

    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:"Token is invalid"
        })
    }
    
})


app.use("/api/authors/",loginRoutes );
app.use("/api/authors/books",addBooksRoutes );


app.listen(process.env.PORT || 8000, ()=>console.log("Server is running on 8000 port"));