const { sequelize, Wine } = require('../../../models');

describe('Wine Model', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterEach(async () => {
    await Wine.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a new wine', async () => {
    const wine = await Wine.create({
      name: 'Château Lafite Rothschild',
      vintage: 2010,
      quantity: 10,
      price: 1000,
    });
    expect(wine.name).toBe('Château Lafite Rothschild');
    expect(wine.vintage).toBe(2010);
    expect(wine.quantity).toBe(10);
    expect(wine.price).toBe(1000);
  });

  // Add more test cases as needed...
});
