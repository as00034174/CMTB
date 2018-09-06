const CitizenDetail = require("../models/CitizenDetail")
const Block = require("../controllers/BlockMethod.ctrl")
module.exports = {
    addCitizenDetail: async (req, res, next) => {
        // let initItem = {
        //     index: 1,
        //     timestamp: Date.now(),
        //     previousHash: "0x000000000000000000000",
        //     hash: "0x0000000000000000000",
        //     data: {
        //         idcard: 0000000000001,
        //         fullName: "0000000000000",
        //         dateofBirth: "1997/11/16",
        //         gender: "Male",
        //         relationShip: {
        //             fatherName: "0x000000",
        //             motherName: "0x000000"
        //         },
        //         address: "0x00000000",
        //         degree: "Undergraduate"
        //     }
        // }
        const newBlock = await Block.generateNextBlock(req.body);
        new CitizenDetail(newBlock).save((err, result) => {
            if (err) throw err;
            else
                res.send(result)
            next();
        })
    },

    getAllBlock: (req, res, next) => {
        CitizenDetail.find({}, (err, result) => {
            if (err) throw err;
            else
                res.send(result);
            next();
        })
    },
    

    getBlocksByCitizenName: (req, res, next) => {
        CitizenDetail.find({"fullName" : req.body.searchKey}, (err, result) => {
            if (err) throw err;
            else
                res.send(result);
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