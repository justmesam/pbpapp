
const userRoutes = require('./src/routes/user.routes');
const itemRoutes = require('./src/routes/item.routes');
const orderRoutes = require('./src/routes/order.routes');

 module.exports = (router) => {
   userRoutes(router);
   itemRoutes(router);
   orderRoutes(router);
 }
