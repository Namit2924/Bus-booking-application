const express = require("express");
const router = express.Router();
const busController = require("../controllers/busController");

router.get("/", (req, res) => res.render("index"));

router.get("/buses", busController.getBuses);
router.post("/add-bus", busController.addBus);

module.exports = router;