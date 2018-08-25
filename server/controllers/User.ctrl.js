const User = require('../models/User')

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
        User.findOne({
            userID: req.body.userID,
            password: req.body.password
        },
            (err, user) => {

                if (err) {
                    res.send(err)
                }
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
        var obj = new User({
            userID: req.body.username,
            fullName: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        });
        obj.save((error, result) => {
            if (error)
                console.log(error);
            else if (!result)
                res.send(400);
            else
                res.send(result);
        });
    }
}
