const mongoose = require('mongoose');

let ShopSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        longitude: { type: String, required: true },
        latitude: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now },
        vendor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
    }
);

module.exports = mongoose.model('Shop', ShopSchema);
