
const userRoutes = require('./src/routes/user.routes');
const itemRoutes = require('./src/routes/item.routes');

 module.exports = (router) => {
   userRoutes(router);
   itemRoutes(router);
 }
