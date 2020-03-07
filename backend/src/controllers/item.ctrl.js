const mongoose = require('mongoose');

const Item = require('../models/item.model');


module.exports = {
  CreateItem : async (req, res) => {
      let { name, price, shop } = req.body;

      if(!name || !price) return res
        .status(400)
        .send({ message:`Kindly provide item details to continue`});

      const item = Item({
        name: name,
        price: price,
        shop: mongoose.Types.ObjectId(shop)
      })

      await item.save()


      const responseObject = {
        name: item.name,
        price: item.price,
        shop: item.shop,
        id: item._id,
        dateCtreated: item.dateCtreated
      }

      res.send({
        message: `Item created!`,
        item: responseObject
      })
  },
  FetchItems : async (req, res) => {
    let shop = req.params.shop
    let limit = parseInt(req.params.limit, 10)

    if(shop) {
      const numberOfItems = await Item.countDocuments({ shop: shop })

      if (limit && limit < numberOfItems) {
        const limitedItems = await Item
        .find({ shop: shop })
        .sort({ _id: -1 })
        .limit(limit)

        return res.send({
          count: limit,
          item: limitedItems
        })
      }
      const allItems = await Item.find({ shop: shop })

      return res.send({
        count: numberOfItems,
        item: allItems
      })
    }
    res.status(400).send({ message: `Provide shop id to get items`})
  }
};
