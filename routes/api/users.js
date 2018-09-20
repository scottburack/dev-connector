//auth

const express = require("express");
const router = express.Router();

// '/test' gets added to the end of '/api/users  => '/api/users/test'
// @route  GET api/pusers/test
// @desc   Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
