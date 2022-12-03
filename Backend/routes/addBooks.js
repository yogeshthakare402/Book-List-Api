const express = require("express");
const bodyParser = require("body-parser");
const { body, validationResult } = require('express-validator');
const Books = require("../models/book");
const Author = require("../models/author")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";
const router = express.Router();


router.post("/", async (req, res) => {
    try{
        const books = await Books.create({
                title: title,
                isbn: isbn,
                author: author,
                description: description,
                date: date,
                publisher: publisher
        });
        res.json({
            status: "Sucess",
            books
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }

});

router.get("/", async (req, res) => {
    try{

        const books = await Books.find()
        // .populate("author");
        res.json({
            status: "Sucess",
            books
        })
    }catch(e) {
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }

});

router.put("/:id", async (req, res) => {
    try{
        const books = await Books.findOne({$and : [{author: req.author},{ _id: req.params.id}]});

        if(books){
            const books = await Books.updateOne({_id: req.params.id}, req.body);
            res.json({
                status: "Sucess",
                books
            })
        }else {
            res.status(401).json({
                status: "Failed",
                message: "User is not authorised to make changes in this post"
            })
        }

    }catch(e) {
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }

});

router.delete("/:id", async (req, res) => {
    try{
        const books = await Books.findOne({$and : [{user: req.user},{ _id: req.params.id}]});

        if(books){
            const books = await Books.deleteOne({_id: req.params.id});
            res.json({
                status: "Sucess",
                message: "Post deleted"
            })
        }else {
            res.status(401).json({
                status: "Failed",
                message: "User is not authorised to make changes in this post"
            })
        }

    }catch(e) {
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }

});
module.exports = router;