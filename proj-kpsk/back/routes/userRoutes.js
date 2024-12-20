const express = require("express");
const { results } = require("../controllers/userController");

const router = express.Router();

router.post("/results", results);

module.exports = router;
