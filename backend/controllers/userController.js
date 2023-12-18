const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Hash password before saving
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

module.exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, password, email } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    data: users,
  });
};

//   ce code implémente une procédure d'authentification simple pour une application web. Il vérifie l'email et le mot de passe d'un utilisateur, puis génère un token d'accès s'ils sont corrects.
async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

const accessToken = (id) => {
  return jwt.sign({ data: { id } }, process.env.JWT_KEY, { expiresIn: "30d" });
};

module.exports.auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return "email does not exist";
    }
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) {
      return " password is not correct";
    }

    //await User.findByIdAndUpdate( user._id,{accessToken})
    const token = accessToken(user._id);
    res.status(201).json({ message: "successfully connection ", token });
  } catch (error) {
    res.status(500).json(`message ${error}`);
  }
};
