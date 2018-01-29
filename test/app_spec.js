const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

// server must be running
describe('App', function() {
  describe('/about-pages', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
      .get('/about-page')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});
