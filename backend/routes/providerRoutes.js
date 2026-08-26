const express = require("express");

const {
    geocodePostcode,
    getNearbys
} = require("../controllers/providerController");

const router = express.Router();

router.get('/providers/geocode', geocodePostcode);
router.get('/providers/nearby', getNearbys);

module.exports = router;

