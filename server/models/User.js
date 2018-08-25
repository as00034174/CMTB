const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({

    userID: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dateOfCreate: { type: Date, default: Date.now }

})

module.exports = mongoose.model("User", UserSchema)