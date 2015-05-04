/* global describe, it */

var app = require('../index');
var request = require('supertest').agent(app.listen());

describe('GET /', function () {
    it('should display success"', function (done) {
        request
            .get('/')
            .expect('Welcome to koajs-starter', done);
    });
});

describe('GET /link/123', function () {
    it('should return 123', function (done) {
        request
            .get('/link/123')
            .expect('Get value from params : 123', done);
    });
});