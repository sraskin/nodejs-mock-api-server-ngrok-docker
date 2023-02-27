const express = require('express');
const router = express.Router();
const mockRespose = require('../services/mock_response');

/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.status(200).json({message: "save success"});
});

router.post('/mock_response/success', mockRespose.mock_response_success);
router.post('/mock_response/fail', mockRespose.mock_response_fail);

module.exports = router;