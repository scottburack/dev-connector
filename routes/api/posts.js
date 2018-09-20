const express = require("express");
const router = express.Router();

// '/test' gets added to the end of '/api/posts  => '/api/posts/test'
// @route  GET api/posts/test
// @desc   Tests post route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
