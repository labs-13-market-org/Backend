const express = require('express');

const vendorController = require('../controllers/vendorController.js');

const vendorRouter = express.Router();

const isAuthenticated = require('../middleware/firebase.js');

vendorRouter.get('/', vendorController.getVendors);
vendorRouter.get('/:firebase_id', vendorController.getVendorByFirebaseId);
vendorRouter.get('/market/:firebaseId/vendor', vendorController.getVendorByMarketFirebaseId);
vendorRouter.get('/id/:id', vendorController.getVendorById);
// vendorRouter.post('/:firebaseId', vendorController.addVendorByFirebaseId);
vendorRouter.post('/', isAuthenticated, vendorController.addVendor);
vendorRouter.put('/:firebase_id', isAuthenticated, vendorController.updateVendor);
vendorRouter.delete('/:firebase_id', isAuthenticated, vendorController.deleteVendor);


module.exports = vendorRouter;