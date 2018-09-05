const CitizenDetail = require('../controllers/CitizenDetail.ctrl')
var fs = require('fs');


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
            if (req.body.selectedFile) {
                var file = req.body.selectedFile;
                console.log(__dirname);
                ///
                const base64Data = file.replace(/^data:([A-Za-z-+/]+);base64,/, '');
                // fs.writeFile(path, base64Data, 'base64', (err) => {
                //     console.log(err);
                // });
                // //
                fs.appendFile('/home/nam/Documents/NodeJS/CMTB/public/assets/images/' + req.body.fileName, base64Data, 'base64', (err) => {
                    if (err) throw err;
                    console.log('Saved!');
                });
            }
            else {
                res.send("No File selected !");
                res.end();
            };
        });
}