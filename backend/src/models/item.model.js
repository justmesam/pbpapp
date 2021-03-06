const mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        dateCreated: { type: Date, default: Date.now },
        shop: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Shop',
          required: true
        }
    }
);

module.exports = mongoose.model('Item', ItemSchema);
