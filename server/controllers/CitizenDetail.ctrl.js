const CitizenDetail = require("../models/CitizenDetail")

module.exports = {
    addCitizenDetail: (req, res, next) => {
        // let { index, timestamp, previousHash, hash, data }
        // let { idcard,
        //     fullName,
        //     dateofBirth,
        //     gender,
        //     relationShip: {
        //         fatherName,
        //         motherName
        //     },
        //     address, degree } = req.body;


        let initItem = {
            index: 1,
            timestamp: Date.now(),
            previousHash: "0x000000000000000000000",
            hash: "0x0000000000000000000",
            data: {
                idcard: 0000000000001,
                fullName: "0000000000000",
                dateofBirth: "1997/11/16",
                gender: "Male",
                relationShip: { 
                    fatherName: "0x000000",
                    motherName: "0x000000"
                },
                address: "0x00000000",
                degree: "Undergraduate"
            }
        }
        new CitizenDetail(initItem).save((err, result) => {
            if (err) throw err;
            else res.send(result)
            next();
        })
    },

    getCitizenDetailByDate: (req, res, next) => {
        var obj = new CitizenDetail({ timestamp: req.body.timestamp });
        CitizenDetail.find({ timestamp: req.body.timestamp }, (err, result) => {
            if (err) throw err;
            else
                res.send(result);
            next();
        })
    }
}