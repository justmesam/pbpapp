const mongoose = require('mongoose');

const Order = require('../models/order.model');
const Shop = require('../models/shop.model');
const Item = require('../models/item.model');


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

      if(numberOfOrders < 1) return res.send({
        count : numberOfOrders,
        shops: []
      })

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
    },
    AllShops : async (req, res) => {
      const userId = res.locals.userId

      let numberOfShops = await Shop.countDocuments()

      if (numberOfShops < 1) return res.send({
        count : numberOfShops,
        shops: []
      })

      const shops = allOrders = await Shop.find()

      const allShops = await Promise.all(
        shops.map(async (shop) => {
            const shopId = shop._id

            const items = await Item.find({ shop : shopId })
            const responseObj = {
              id: shop._id,
              name: shop.name,
              longitude: shop.longitude,
              latitude: shop.latitude,
              vendor: shop.vendor,
              dateCtreated: shop.dateCtreated,
              items: items
            }

            return responseObj
      }))

        return res.send({
          count : numberOfShops,
          shops: allShops
        })
      }
};
