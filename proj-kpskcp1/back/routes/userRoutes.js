const express = require("express");
const { results, vote, log } = require("../controllers/userController");

const router = express.Router();

router.post("/results", results);
router.get("/vote", vote);
router.post("/log", log);

module.exports = router;
