const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const config = require("../config/config");
const jwt = require('jsonwebtoken');
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email,password } = req.body;
    const user = await User.create({ firstName, lastName, email,password });

    const value={firstName,lastName,email};
    console.log(value);
    res.status(201).json({value});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] }});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } },);
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      // If the email and password are valid, return a success message and the user object
      const token = jwt.sign({ userId: user.id }, config.JWT_SECRET);

      // Send the access token and user object back to the client
      res.json({ message: 'Login successful', user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
 
  
  
  
  