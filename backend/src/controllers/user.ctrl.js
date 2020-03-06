const bcrypt = require('bcrypt');

const User = require('../models/user.model');
const authMidlleware = require('../middlewares/auth.middleware')

module.exports = {
  CreateUser : async (req, res) => {
      let { username, email, password, isVendor } = req.body;

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

      const token = authMidlleware.generateToken(user.username, user._id)

      const userObject = {
        email: user.email,
        username: user.username,
        id: user._id,
        isVendor: user.isVendor,
        userKey: token
      }

      res.send({
        message: `Welcome to shoppu, ${username}`,
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
        const userObject = {
          email: user.email,
          username: user.username,
          id: user._id,
          isVendor: user.isVendor
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
  }
};
