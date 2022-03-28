const request = require('supertest');
const app = require('../../app');

describe("Test GET /launches", () => {
    test('It should responde with 200 sucess', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});


describe('Test Post /launch', () => {
    test('It should respond with 200 success', () => {

    })

    test('it should catch missing required properties', () => {});
    test('it should catch invalid dates', () => {});
});