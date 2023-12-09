import request from 'supertest';
// eslint-disable-next-line import/no-unresolved
import Professional from '../Models/Professional';
import professionalSeed from '../Seed/professional';
import app from '../app';

beforeAll(async () => {
  await Professional.collection.insertMany(professionalSeed);
});

let professionalId;

describe('Test Professional routes', () => {
  test('It should create a new professional', async () => {
    const response = await request(app).post('/professionals').send({
      first_name: 'German',
      last_name: 'Dosko',
      email: 'german.dosko@devskode.com',
      password: 'devskode',
      role: 'Director',
      module: 'Human Resources',
    });
    if (response.error.text) expect(response.statusCode).toBe(201);
    expect(response.body.error).toBe(false);
    // eslint-disable-next-line no-underscore-dangle
    professionalId = response.body.data._id;
  });

  test('It should get the professional list', async () => {
    const response = await request(app).get('/professionals');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });

  test('It should delete a professional', async () => {
    const response = await request(app).delete(`/professionals/${professionalId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });
});
