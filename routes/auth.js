const express = require('express')
const mongoose = require('mongoose')
const users = require('../models/users')
// const { route } = require('express/lib/application')

const router = express.Router()

router.get('/users' , async (req,res) => {
    // console.log("request recvd")
    data = await users.find()
    res.send(data)
    
}),

router.post('/createuser' , async (req,res) => {
    // console.log("request received")
    newuser = new users({
        username : req.body.username,
        email    : req.body.email,
        name     : req.body.name,
        password : req.body.password,
        role     : req.body.role
    })
    newuser = await newuser.save()
    res.send(newuser)
     
})

module.exports = router