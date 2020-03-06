const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        isVendor: { type :Boolean, default: false }
    }
);

UserSchema.methods.save = function(cb) {
  return this.model('User').save()
}

module.exports = mongoose.model('User', UserSchema);
