const request = require('supertest');
const app = require('../../../app');
const { Wine } = require('../../../models');

describe('Wine Controller', () => {
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
    const response = await request(app)
      .post('/wines')
      .send(wineData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');

  });

  
});
