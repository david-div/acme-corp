const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

// server must be running
describe('App', function() {
  describe('/about-page', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
      .get('/about-page')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('/jobs', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
      .get('/jobs')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('/valves', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
      .get('/valves')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('not valid route', function() {
    it('responds with status 404', function(done) {
      chai.request(app)
      .get('/not-routed-page')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
    });
  });


});
