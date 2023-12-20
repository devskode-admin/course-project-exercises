import request from 'supertest';
import Technology from '../Models/Technology';
import technologySeed from '../Seed/technology';
import app from '../app';

beforeAll(async () => {
  await Technology.collection.insertMany(technologySeed);
});

let technologyId;
let fakeId = '65843b4073dc69c46904e247';

describe('Test Technology endpoints', () => {
  test('It should create a new technology', async () => {
    const response = await request(app).post('/technologies').send({
      name: 'Material UI',
      development_side: 'Frontend',
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.error).toBe(false);
    // eslint-disable-next-line no-underscore-dangle
    technologyId = response.body.data._id;
  });

  test('It should not create a the same technology twice with the same name', async () => {
    const response = await request(app).post('/technologies').send({
      name: 'Material UI',
      development_side: 'Frontend',
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe(true);
  });

  test('It should get the technologies list', async () => {
    const response = await request(app).get('/technologies');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });

  test('It should update a technology', async () => {
    const response = await request(app).put(`/technologies/${technologyId}`).send({
      development_side: 'Backend',
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.error).toBe(false);
  });

  test('It should not update any technologies with a non existing id', async () => {
    const response = await request(app).put(`/technologies/${fakeId}`)
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe(true);
  });

  test('It should delete a technology', async () => {
    const response = await request(app).delete(`/technologies/${technologyId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });

  test('It should not delete any technologies with a non existing id', async () => {
    const response = await request(app).delete(`/technologies/${fakeId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe(true);
  });
});
