const express = require("express");
const router = express.Router();

// '/test' gets added to the end of '/api/profile  => '/api/profile/test'
// @route  GET api/profile/test
// @desc   Tests profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
