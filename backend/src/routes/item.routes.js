const itemController = require('../controllers/item.ctrl');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = (router) => {

    router
        .route('/item/create')
        .post(authMiddleware.verifyToken, itemController.CreateItem);

    router
        .route('/item/fetch/:shop/:limit?')
        .get(authMiddleware.verifyToken, itemController.FetchItems);

    router
        .route('/item/fetch')
        .get(authMiddleware.verifyToken, itemController.FetchItems);
};
