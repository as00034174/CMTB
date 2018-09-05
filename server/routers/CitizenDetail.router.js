const CitizenDetail = require('../controllers/CitizenDetail.ctrl')
const express = require('express')
const fileupload = require('express-fileupload')
const multer = require('multer');

const app = express();
app.use(fileupload());

module.exports = (router) => {
    router
        .route('/addNewDetail')
        .post(CitizenDetail.addCitizenDetail)


    router
        .route('/getDetailByDate')
        .get(CitizenDetail.getCitizenDetailByDate)

    router
        .route('/uploadFile')
        .post((req, res, next) => {
            console.log(req.body.data);
            if (req.body.file) {
                var file = req.body.data,
                    name = file.name,
                var uploadpath = __dirname + '/assets/' + name;
                file.mv(uploadpath, function (err) {
                    if (err) {
                        console.log("File Upload Failed", name, err);
                        res.send("Error Occured!")
                    }
                    else {
                        console.log("File Uploaded", name);
                        res.send('Done! Uploading files')
                    }
                });
            }
            else {
                res.send("No File selected !");
                res.end();
            };
        });
}