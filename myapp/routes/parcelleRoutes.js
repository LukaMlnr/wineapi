const express = require('express');
const router = express.Router();
const parcelleController = require('../controllers/parcelleController');

// Route pour créer une nouvelle parcelle
router.post('/parcelles', parcelleController.createParcelle);

// Route pour récupérer toutes les parcelles
router.get('/parcelles', parcelleController.getAllParcelles);

// Route pour récupérer une parcelle par son ID
router.get('/parcelles/:id', parcelleController.getParcelleById);

// Route pour mettre à jour une parcelle par son ID
router.put('/parcelles/:id', parcelleController.updateParcelleById);

// Route pour supprimer une parcelle par son ID
router.delete('/parcelles/:id', parcelleController.deleteParcelleById);

module.exports = router;
