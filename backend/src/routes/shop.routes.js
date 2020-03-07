const shopController = require('../controllers/shop.ctrl');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = (router) => {

    router
        .route('/shop/fetch/:limit?')
        .get(authMiddleware.verifyToken, shopController.FetchShops);
};
