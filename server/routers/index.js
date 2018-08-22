const user = require("./user")
const CitizenDetail = require ('./CitizenDetail.router')

module.exports = (router) => {
    user(router)
    CitizenDetail(router)
}

