// wineService.js
const Wine = require('../models/Wine.js');

class WineService {
  async getAllWines() {
    return await Wine.findAll();
  }

  async getWineById(id) {
    return await Wine.findByPk(id);
  }

  async createWine(data) {
    return await Wine.create(data);
  }

  async updateWine(id, data) {
    const wine = await Wine.findByPk(id);
    if (!wine) {
      throw new Error('Wine not found');
    }
    return await wine.update(data);
  }

  async deleteWine(id) {
    const wine = await Wine.findByPk(id);
    if (!wine) {
      throw new Error('Wine not found');
    }
    return await wine.destroy();
  }
}

module.exports = new WineService();
