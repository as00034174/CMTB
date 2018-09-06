const mongoose = require('mongoose')

let CitizenDetail = new mongoose.Schema({
    index: Number,
    timeStamp: {type: Date, default: Date.now },
    previousHash: String,
    hash: String,
    blockData: {
        idCard: { type: Number, required: true },
        fullName: { type: String, required: true },
        birthDate: { type: String, required: true },
        gender: String,
        relationShip: {
            fatherName: String,
            motherName: String
        },
        address: String,
        degree: [{ type: String }],
        fileName:[{type: String}]
    },
})

module.exports = mongoose.model("CitizenDetail", CitizenDetail);