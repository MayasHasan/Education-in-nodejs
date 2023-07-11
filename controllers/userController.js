const {
  User,
  validateRegisterUser,
  validateloginUser,
  generateToken,
} = require("../models/userModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");
module.exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.send(user);
};

module.exports.registerUser = async (req, res) => {
  const { error } = validateRegisterUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).send("user already registerd.");
  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashedPassword });
  const token = generateToken(user);
  res
    .header("x-token", token)
    .status(201)
    .send(_.pick(user, ["name", "email"]));
};

module.exports.loginUser = async (req, res) => {
  const { error } = validateloginUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user);
    return res.status(200).json({ token });
  }
  return res.status(401).send("email or passowrd is not valid");
};
