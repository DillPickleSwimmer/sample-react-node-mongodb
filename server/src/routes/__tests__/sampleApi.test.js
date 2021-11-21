const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");

describe("Test /api", () => {
  const OLD_ENV = process.env;
  let mongod;
  let app;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    process.env = { ...OLD_ENV, MONGODB_URI: uri };
    app = require("../../initRoutes");
  });

  afterAll(async () => {
    process.env = OLD_ENV;
    await mongod?.stop();
  });

  test("It should respond with a 200 status", async () => {
    await request(app)
      .get("/api")
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Hello from server!");
      });
  });
});
