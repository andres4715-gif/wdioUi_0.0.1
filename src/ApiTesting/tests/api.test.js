const request = require('supertest');

const app = require('../app');

/**
 * Testing get all user endpoint
 */

describe('GET /users', () => {
    it('respond with json containing a list of all users', (done) => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('/GET /users/:id', () => {
    it('respond with json containing a single user', (done) => {
        request(app)
            .get('/users/U0001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('respond with json user U0001 found when the user exists', (done) => {
        request(app)
            .get('/users/U0001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"User U0001 Found"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('respond with json "user not found" when the user does not exist', (done) => {
        request(app)
            .get('/users/U0002')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"User not Found"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('/POST /Users', () => {
    it('respond with 201 created', (done) => {
        const data = {
            username: 'fazt',
            password: 'password123'
        }
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .expect('"User created"')
            .end(err => {
                if (err) return done(err);
                done();
            });
    });

    it('respond with 404 user is not created', (done) => {
        const data = {};
        request(app)
            .post('/users')
            .set('Accept', 'application/json')
            .send(data)
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"User not created"')
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
});


