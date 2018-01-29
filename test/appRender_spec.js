const chai = require('chai')
const expect = require('chai').expect
const Browser = require('zombie')
const browser = new Browser()
const url = 'http://localhost:3000/'
const app = require('../app')

// server must be running
describe('Renderer ', function() {

  describe('/about-page', function() {

    it('renders data to the page', function(done) {
      browser.visit(url + 'about-page', function() {
        expect(browser.text('body')).to.include('Acme Co. is a reputable maker of widgets and is an international brand.');
        done();
      })
    });
  })
})
