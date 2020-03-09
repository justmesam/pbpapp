const mongoose = require('mongoose');

const Order = require('../models/order.model');
const Shop = require('../models/shop.model');


module.exports = {
  FetchShops : async (req, res) => {
    let limit = parseInt(req.params.limit, 10)
    const userId = res.locals.userId
    let allOrders;

    let numberOfOrders = await Order.countDocuments({ customer: userId })


    if (limit && limit < numberOfOrders) {
      allOrders = await Order
      .find({ customer: userId  })
      .sort({ _id: -1 })
      .limit(limit)
      numberOfOrders = limit
      } else {
      allOrders = await Order
      .find({ customer: userId })
      .sort({ _id: -1 })
      }

      const allShops = await Promise.all(
        allOrders.map(async (order) => {
            const shopId = order.shop

            const shop = await Shop.findOne({ _id : shopId })
            const responseObj = {
              id: shop._id,
              name: shop.name,
              longitude: shop.longitude,
              latitude: shop.latitude,
              vendor: shop.vendor,
              dateCtreated: shop.dateCtreated
            }

            return responseObj
      }))

      return res.send({
        count : numberOfOrders,
        shops: allShops
      })
    }
};
