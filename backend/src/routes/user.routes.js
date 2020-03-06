const userController = require('../controllers/user.ctrl');

module.exports = (router) => {
    router
        .route('/user/register')
        .post(userController.CreateUser);

    router
        .route('/user/login')
        .post(userController.LoginUser);
};
