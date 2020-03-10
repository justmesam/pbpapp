const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models/user.model');
const Shop = require('../models/shop.model')

const authMiddleware = require('../middlewares/auth.middleware')

const handleShop = async (shopDetails, user, res) => {
  const { name,latitude, longitude} = shopDetails

  if(!user.isVendor) return res
    .status(400)
    .send({ message:`Only a vendor can create a shop,
      kindly update your profile`});


  if(!name || !latitude  || !longitude) return res
    .status(400)
    .send({ message:`Kindly provide all shop details`});

  let vendorshop = Shop({
    name: name,
    longitude: longitude,
    latitude: latitude,
    vendor: mongoose.Types.ObjectId(user._id)
  })

  await vendorshop.save()

  return vendorshop
}

module.exports = {
  CreateUser : async (req, res) => {
      let { username, email, password, isVendor } = req.body;

      if(!email || !password) return res
        .status(400)
        .send({ message:`Kindly provide register details to continue`});

      let user = await User.findOne({
        email: req.body.email
      });
      if (user) return res
      .status(400)
      .send({ message:`${email} already exists`});

      user = User({
        username: username,
        email: email,
        password: password,
        isVendor: isVendor
      })

      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword


      await user.save()

      const token = authMiddleware.generateToken(user.username, user._id)

      const userObject = {
        email: user.email,
        username: user.username,
        id: user._id,
        isVendor: user.isVendor,
        userKey: token,
        dateJoined: user.dateJoined
      }

      res.send({
        message: `Welcome to pbpapp, ${username}`,
        user: userObject
      })
  },
  LoginUser: async (req, res) => {
    let { email, password } = req.body;

    let user = await User.findOne({
      email: req.body.email
    });

    if (user) {
      const verifyPassword = await bcrypt.compare(password, user.password);

      if(verifyPassword) {
        const token = authMiddleware.generateToken(user.username, user._id)

        const userObject = {
          email: user.email,
          username: user.username,
          id: user._id,
          isVendor: user.isVendor,
          dateJoined: user.dateJoined,
          userKey: token
        }

        return res.send({
          message: `Welcome back ${user.username}`,
          user: userObject })
      }
      return res
      .status(400)
      .send({ message:`Wrong password provided for ${user.email}`});
    }

    return res
    .status(400)
    .send({ message:`${email} doesn't exist, kindly register first`});
  },
  UpdateUser: async (req, res) => {
    const userId = res.locals.userId;
    const request = req.body;
    const requestKeys = Object.keys(request);
    let shop;

    if (requestKeys) {
      let user = await User.findOne({
        _id: userId
      });

      requestKeys.forEach(async (key) => {
        let updateKey = key

        if(key === 'shop'){
            shop = await handleShop(request[key], user, res)
            updateKey = mongoose.Types.ObjectId(shop._id)
        }
        if(key === 'password'){
          const hashedPassword = await bcrypt.hash(user.password, 10);
          updateKey = hashedPassword
        }
        user[key] = request[updateKey]
      })

      await user.save()

      const shopDetails = shop ? {
        id: shop._id,
        name: shop.name,
        longitude: shop.longitude,
        latitude: shop.latitude,
        vendor: shop.vendor,
        dateCreated: shop.dateCreated
      } : {}


      const responseObject = {
        email: user.email,
        username: user.username,
        id: user._id,
        isVendor: user.isVendor,
        dateJoined: user.dateJoined,
        shop: shopDetails
      }

      return res.send({
        message: `Update successful`,
        responseObject
      })

    }
    return res
      .status(400)
      .send({ message:`Kindly provide items to be updated`});
  }
};
