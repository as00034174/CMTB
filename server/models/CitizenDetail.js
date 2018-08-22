const mongoose = require('mongoose')

let CitizenDetail = new mongoose.Schema({
    index: Number,
    timestamp: {type: Date, default: Date.now },
    previousHash: String,
    hash: String,
    data: {
        idcard: { type: Number, required: true },
        fullName: { type: String, required: true },
        dateofBirth: { type: String, required: true },
        gender: String,
        relationShip: {
            fatherName: String,
            motherName: String
        },
        address: String,
        degree: [{ type: String }]
    },
})

module.exports = mongoose.model("CitizenDetail", CitizenDetail);