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
        id: item._id
      }

      res.send({
        message: `Item created!`,
        item: responseObject
      })
  },

};
