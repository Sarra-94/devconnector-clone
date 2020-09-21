const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
// @route POST api/users
// @desc Register User
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "email is required enter a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more charachters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password } = req.body;
    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exist" }] });
      }
      // Get user Gravat

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        password,
        avatar,
      });

      // Encrypt the passwor

      const salt= await bcrypt.genSalt(10)
      user.password= await bcrypt.hash(password,salt)
      await user.save();

      // return jsonwebtoken
      res.send("user save it ")
    } catch (err) {
      res.status(500).status("Server Error");
    }
  }
);

module.exports = router;
