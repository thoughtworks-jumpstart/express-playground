const request = require("supertest");
const app = require("./testing_example_1");

describe("GET /", () => {
  it("should respond correctly", async done => {
    const response = await request(app)
      .get("/")
      .expect(200);
    expect(response.text).toEqual("Welcome to my homepage");
    done();
  });

  it("should respond correctly", async done => {
    const { text } = await request(app)
      .get("/")
      .expect(200);
    expect(text).toEqual("Welcome to my homepage");
    done();
  });
});

describe("GET /books", () => {
  it("should respond correctly", async done => {
    const response = await request(app)
      .get("/books")
      .expect(200);
    expect(response.text).toEqual("You requested a list of books....");
    done();
  });

  it("should get a book by id", async done => {
    const id = "3";
    const response = await request(app)
      .get(`/books/${id}`)
      .expect(200);
    expect(response.text).toEqual(`You request information on book ${id}`);
    done();
  });
});

describe("POST /", () => {
  it("should respond correctly when sending json", async done => {
    const { text } = await request(app)
      .post("/")
      .send({ thisIsJson: "json!" })
      .expect(200);
    expect(text).toEqual("Thanks for the JSON!");
    done();
  });

  it("should respond with status 400 and correct string when sending non-json", async done => {
    const { text } = await request(app)
      .post("/")
      .send("This is not json!")
      .expect(400);
    expect(text).toEqual("Server wants application/json!");
    done();
  });
});
