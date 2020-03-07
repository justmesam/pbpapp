const orderController = require('../controllers/order.ctrl');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = (router) => {

    router
        .route('/order/create')
        .post(authMiddleware.verifyToken, orderController.CreateOrder);

    router
        .route('/order/fetch/:limit?')
        .get(authMiddleware.verifyToken, orderController.FetchOrders);
};
