const express = require('express');
const router = express.Router();
const dataController = require("../controller/dataController");

router
    .route('/data')
    .post(dataController.createData)
    .get(dataController.getAllData)

router
    .route('/data/:id')
    .get(dataController.getDataByID)
    .patch(dataController.updateDataById)
    .delete(dataController.deleteDataById)

// Individual routes for price and volume data
router
    .route('/data/:id/price')
    .get(dataController.getPriceDataByID)

router
    .route('/data/:id/volume')
    .get(dataController.getVolumeDataByID)

router
    .route('/data/:id/price-volume')
    .get(dataController.getPriceVolumeDataByID)

module.exports = router;