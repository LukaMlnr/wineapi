const { WineService } = require('../../../services');
const { Wine } = require('../../../models');

describe('Wine Service', () => {
  beforeEach(async () => {
    await Wine.destroy({ where: {} });
  });

  it('should create a new wine', async () => {
    const wineData = {
      name: 'Château Lafite Rothschild',
      vintage: 2010,
      quantity: 10,
      price: 1000,
    };
    const createdWine = await WineService.createWine(wineData);
    expect(createdWine).toBeDefined();
    expect(createdWine.name).toBe('Château Lafite Rothschild');
   
  });

  
});
