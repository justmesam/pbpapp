const itemController = require('../controllers/item.ctrl');
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = (router) => {

    router
        .route('/item/create')
        .post(authMiddleware.verifyToken, itemController.CreateItem);
};
