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
        User.find({ userID: req.params.userID, password: req.params.password }, (err, user) => {
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
        var obj = new User({ userID: "as000", fullName: "Tran Trung Nam", email: "trantrungnam1997vn2@gmail", password: "abcd" });
        try {
            obj.save();
        }
        catch (err){
            console.log(err);
        }
    }
}
