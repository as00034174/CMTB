const userController = require("./../controllers/User.ctrl")

module.exports = (router) => {

    router
        .route('/login')
        .get(userController.getUserById)

    router
        .route('/users')
        .get(userController.getAllUser)

    router
        .route("/addNewUser")
        .get(userController.addNewUser)
}