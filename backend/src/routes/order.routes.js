const itemController = require('../controllers/order.ctrl');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = (router) => {

    router
        .route('/order/create')
        .post(authMiddleware.verifyToken, itemController.CreateOrder);
};
