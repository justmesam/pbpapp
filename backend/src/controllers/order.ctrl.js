const mongoose = require('mongoose');

const Order = require('../models/order.model');
const Item = require('../models/item.model');


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
        dateCtreated: order.dateCtreated
      }

      res.send({
        message: `Order created!`,
        order: responseObject
      })
  },
  FetchOrders : async (req, res) => {
    let limit = parseInt(req.params.limit, 10)
    const userId = res.locals.userId

    const numberOfOrders = await Order.countDocuments({ customer: userId })

    if (limit && limit < numberOfOrders) {
      const limitedOrders = await Order
      .find({ customer: userId  })
      .sort({ _id: -1 })
      .limit(limit)

      return res.send({
        count: limit,
        orders: limitedOrders
      })
    }
    const orders = await Order.find({ customer: userId })

    const allOrders = await Promise.all(
      orders.map(async (order) => {

          const allItems = await Promise.all(
            order.items.map(async (id) => {
                const item = await Item.findOne({ _id : id })

                return item
          }))

          const responseObj = {
            name: order.name,
            total: order.total,
            items: allItems,
            shop: order.shop,
            id: order._id,
            customer: order.customer,
            dateCtreated: order.dateCtreated
          }

          return responseObj
    }))

    return res.send({
      count: numberOfOrders,
      orders: allOrders
      })
    }
};
