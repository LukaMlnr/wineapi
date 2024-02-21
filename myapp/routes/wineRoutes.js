// wineRoutes.js
const express = require('express');
const router = express.Router();
const wineController = require('../controllers/wineController');

// GET all wines
router.get('/wines', wineController.getAllWines);

// GET a specific wine by ID
router.get('/wines/:id', wineController.getWineById);

// POST a new wine
router.post('/wines', wineController.createWine);

// PUT/update a wine by ID
router.put('/wines/:id', wineController.updateWine);

// DELETE a wine by ID
router.delete('/wines/:id', wineController.deleteWine);

module.exports = router;
