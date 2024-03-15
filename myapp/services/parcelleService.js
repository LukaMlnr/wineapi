const {Parcelle} = require('../models');

class ParcelleService {
  async getAllParcelles() {
    return await Parcelle.findAll();
  }

  async getParcelleById(id) {
    return await Parcelle.findByPk(id);
  }

  async createParcelle(data) {
    return await Parcelle.create(data);
  }

  async updateParcelle(id, data) {
    const parcelle = await Parcelle.findByPk(id);
    if (!parcelle) {
      throw new Error('Parcelle not found');
    }
    return await parcelle.update(data);
  }

  async deleteParcelle(id) {
    const parcelle = await Parcelle.findByPk(id);
    if (!parcelle) {
      throw new Error('Parcelle not found');
    }
    return await parcelle.destroy();
  }
}

module.exports = new ParcelleService();
