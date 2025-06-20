const request = require('supertest');
const app = require('../src/app');

describe('User API', () => {
  it('GET /users should return empty array initially', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('POST /users should add a user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Alice', email: 'alice@example.com' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Alice');
  });
});