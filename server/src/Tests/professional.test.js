import request from "supertest";
import Professional from "../Models/Professional";
import { professionalSeedDB } from "../Seed/professional";
import app from "../app";

beforeAll(async () => {
  await Professional.collection.insertMany(professionalSeedDB);
});

let professionalId;
let fakeId = "65843b4073dc69c46904e247";

describe("Test Professional endpoints", () => {
  test("It should create a new professional", async () => {
    const response = await request(app).post("/professionals").send({
      first_name: "Mauro",
      last_name: "Felipe",
      email: "mauro@gmail.com",
      password: "!Testing123",
      role: "Developer",
      module: "Internship",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.error).toBe(false);
    professionalId = response.body.data._id;
  });

  test("It should not create the same professional twice", async () => {
    const response = await request(app).post("/technologies").send({
      first_name: "Mauro",
      last_name: "Felipe",
      email: "mauro@gmail.com",
      password: "!Testing123",
      role: "Developer",
      module: "Internship",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe(true);
  });

  test("It should get the professional list", async () => {
    const response = await request(app).get("/professionals");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });

  test("It should update a professional", async () => {
    const response = await request(app)
      .put(`/professionals/${professionalId}`)
      .send({
        first_name: "Pablo",
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.error).toBe(false);
  });

  test("It should not update any professionals with a non existing id", async () => {
    const response = await request(app).put(`/professionals/${fakeId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe(true);
  });

  test("It should delete a professional", async () => {
    const response = await request(app).delete(
      `/professionals/${professionalId}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });

  test("It should not delete any professionals with a non existing id", async () => {
    const response = await request(app).delete(`/professionals/${fakeId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe(true);
  });
});
