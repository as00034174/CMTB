const CitizenDetail = require('../controllers/CitizenDetail.ctrl')

module.exports = (router) => {
    router
        .route('/addNewDetail')
        .post(CitizenDetail.addCitizenDetail)


    router
        .route('/getDetailByDate')
        .get(CitizenDetail.getCitizenDetailByDate)
}