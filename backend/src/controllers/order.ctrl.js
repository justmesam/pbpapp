const mongoose = require('mongoose');

const Order = require('../models/order.model');


module.exports = {
  CreateOrder : async (req, res) => {
      let { name, total, items, shop } = req.body;
      let allItems = [];

      const userId = res.locals.userId

      if(!name || !shop || typeof items !== 'object')
      return res
        .status(400)
        .send({ message:`Kindly provide Order details to continue`});

      allItems = items.map((item) => mongoose.Types.ObjectId(item))

      const order = Order({
        name: name,
        total: total,
        customer: mongoose.Types.ObjectId(userId),
        shop:  mongoose.Types.ObjectId(shop),
        items: allItems
      })

      await order.save()


      const responseObject = {
        name: order.name,
        total: order.total,
        items: order.items,
        shop: order.shop,
        id: order._id,
        customer: order.customer,
      }

      res.send({
        message: `Order created!`,
        order: responseObject
      })
  },

};
