const express = require("express");
const { vote, log } = require("../controllers/userController");

const router = express.Router();

router.get("/vote", vote);
router.post("/log", log);

module.exports = router;
