// wineController.js
const wineService = require('../services/wineService');

class WineController {
  async getAllWines(req, res) {
    try {
      const wines = await wineService.getAllWines();
      res.json(wines);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getWineById(req, res) {
    const { id } = req.params;
    try {
      const wine = await wineService.getWineById(id);
      if (!wine) {
        return res.status(404).json({ message: 'Wine not found' });
      }
      res.json(wine);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createWine(req, res) {
    const data = req.body;
    try {
      const newWine = await wineService.createWine(data);
      res.status(201).json(newWine);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateWine(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedWine = await wineService.updateWine(id, data);
      res.json(updatedWine);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteWine(req, res) {
    const { id } = req.params;
    try {
      await wineService.deleteWine(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new WineController();
