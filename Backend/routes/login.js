const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const Author = require("../models/author");
const {body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";
const cors = require("cors")

router.use(bodyParser.json());

router.get("/", async(req,res)=>{
    try {
        console.log("inside get author data")
        let author = await Author.find();

        if (author) {
            return res.status(401).json({
                status: "Success",
                author
            });
        }

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})


router.post("/register", body('email').isEmail(),
body("password").isLength({ min: 6}) , async(req, res)=>{

    try {
        console.log("I am inside register")
        //it will validate email and password
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //to check email already ppresent
        const {email, password } = req.body;
        
        let author = await Author.findOne({email:email });

        if (author) {
            return res.status(401).json({
                status: "Failed",
                message: "Email already exists"
            });
        }

        //create hasp value for password
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                return res.status(400).json({
                    status: "Failed",
                    message: err.message
                });
            }
            //create author
            console.log(hash)
            const author = await Author.create({
                email,
                password: hash
            })
            //send the author to db
            return res.json({
                status: "success",
                message: "Registration succesful",
                author
            })

        });

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});

router.post("/login", body('email').isEmail(), async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        let author = await Author.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: "Failed",
                message: "User doesnt exists"
            });
        }

        // Load hash from password DB.
        bcrypt.compare(password, author.password, function (err, result) {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                });
            }
            if (result) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: author._id
                  }, secret);
            

                res.status(200).json({
                    status: "Sucess",
                    message: "Login successful ",
                    token
                });
            } else {
                res.status(401).json({
                    status: "Falied",
                    message: "Invalid credentials !! Please provide correct email/password"
                });
            }
        });

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});



module.exports = router