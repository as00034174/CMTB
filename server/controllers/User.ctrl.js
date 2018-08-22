const User = require('../models/User')
const fs = require('fs')

module.exports = {
    addUser: (req, res, next) => {
        let { userID, fullName, email, password } = req.body
        let obj = { userID, fullName, email, password }
        new User(obj).save((err, user) => {
            if (err)
                res.send(err)
            else if (!user)
                res.send(400)
            else {
                res.send(user)
            }
            next()
        })
    },
    getUserById: (req, res, next) => {
        User.find({ userID: req.body.userID, password: req.body.password }, (err, user) => {
            if (err)
                res.send(err)
            else if (!user)
                res.send(400)
            else
                res.send(user)
            next()
        })
    },

    getAllUser: (req, res, next) => {
        User.find({}, (err, user) => {
            if (err)
                res.send(err)
            else if (!user)
                res.send(400)
            else
                res.send(user)
            next()
        })
    },
    addNewUser: (req, res, next) => {
        console.log(req.body.user.username);
        var obj = new User({ userID: req.body.user.username, fullName: req.body.user.fullname, email: req.body.user.email, password: req.body.user.password });
     
        try {
            obj.save();
        }
        catch (err){
            console.log(err);
        }
        next()
    }
}
