const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validaor");

// @route POST api/users
// @desc Register User
// @access Public
router.post(
  "/",
  [check("name", "Name is required").not().isEmpty(),
  check("email", "email is required enter a valid email").isEmail()
  check("password", "please enter a password with 6 or more charachters").isLength({min:6})
  ],
  (req, res) => {
    console.log(req.body);
    res.send("user route");
  }
);

module.exports = router;
