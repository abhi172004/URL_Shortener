const express = require('express');
const { handleGenerateShortURL } = require('../controller/url');
const router = express.Router();

router.post('/', handleGenerateShortURL);

module.exports = router;