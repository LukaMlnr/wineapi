const parcelleService = require('../services/parcelleService');

exports.createParcelle = async (req, res) => {
  try {
    const { nom, superficie, localisation, exposition, typeSol, anneePlantation, cepages, notes } = req.body;
    const newParcelle = await parcelleService.createParcelle({ nom, superficie, localisation, exposition, typeSol, anneePlantation, cepages, notes });
    res.status(201).json(newParcelle);
  } catch (error) {
    console.error('Error creating parcelle:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllParcelles = async (req, res) => {
  try {
    const parcelles = await parcelleService.getAllParcelles();
    res.json(parcelles);
  } catch (error) {
    console.error('Error getting all parcelles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getParcelleById = async (req, res) => {
  const parcelleId = req.params.id;
  try {
    const parcelle = await parcelleService.getParcelleById(parcelleId);
    res.json(parcelle);
  } catch (error) {
    console.error('Error getting parcelle by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateParcelleById = async (req, res) => {
  const parcelleId = req.params.id;
  const parcelleData = req.body;
  try {
    const updatedParcelle = await parcelleService.updateParcelleById(parcelleId, parcelleData);
    res.json(updatedParcelle);
  } catch (error) {
    console.error('Error updating parcelle by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteParcelleById = async (req, res) => {
  const parcelleId = req.params.id;
  try {
    const result = await parcelleService.deleteParcelleById(parcelleId);
    res.json(result);
  } catch (error) {
    console.error('Error deleting parcelle by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
