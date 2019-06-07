const express = require('express');

const marketController = require('../controllers/market');

const router = express.Router();
const isMarket = require('../middleware/user-type');

router.get('/', marketController.getAllMarkets);
router.get('/:id', marketController.getMarketById);
router.post('/add-market/:id', marketController.addMarket);
router.put('/:id', marketController.editMarket);
router.delete('/:id', marketController.deleteMarket);

module.exports = router