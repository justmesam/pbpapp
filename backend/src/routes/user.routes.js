const userController = require('../controllers/user.ctrl');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = (router) => {
    router
        .route('/user/register')
        .post(userController.CreateUser);

    router
        .route('/user/login')
        .post(userController.LoginUser);

    router
        .route('/user/update')
        .post(authMiddleware.verifyToken, userController.UpdateUser);

    router
        .route('/user')
        .get(authMiddleware.verifyToken, userController.FetchUser)
};
