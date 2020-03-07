const mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        total: { type: Number, required: false },
        dateCreated: { type: Date, default: Date.now },
        customer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        shop: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Shop',
          required: true
        },
        items: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
          required: true
        }]
    }
);

module.exports = mongoose.model('Order', OrderSchema);
