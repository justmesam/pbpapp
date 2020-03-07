const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isVendor: { type :Boolean, required: false },
        shop: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Shop',
          required: false
        }
    }
);

module.exports = mongoose.model('User', UserSchema);
