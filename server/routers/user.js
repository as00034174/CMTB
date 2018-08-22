const userController = require("./../controllers/User.ctrl")

module.exports = (router) => {

    router
        .route('/login')
        .post(userController.getUserById)

    router
        .route('/users')
        .get(userController.getAllUser)

    router
        .route("/register")
        .post(userController.addNewUser)
}