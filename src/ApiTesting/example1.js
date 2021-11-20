const request = require('supertest')('https://jsonplaceholder.typicode.com');
const assert = require('chai').assert;

describe('User API in json placeholder page', () => {
    it('GET /users with only status code', () => {
        return request.get('/users').expect(200);
    })

    it('GET /users with only status code and an Asserts', () => {
        return request
            .get('/users')
            .expect(200)
            .then((res) => {
                assert.isNotEmpty(res.body);
                console.log(res.body);
            });
    })
})
