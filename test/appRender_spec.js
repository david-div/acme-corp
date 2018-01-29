const chai = require('chai')
const expect = require('chai').expect
const Browser = require('zombie')
const browser = new Browser()
const url = 'http://localhost:3000/'
const app = require('../app')

// server must be running
describe('Renderer ', function() {

  describe('/about-page', function() {

    var contents = "# This is the About page " +
      "Acme Co. is a reputable maker of widgets and is an international brand. " +
      "Thank you for your interest in our services. Please contact us at enquiries@acme.com."

    it('renders data to the page', function(done) {
      browser.visit(url + 'about-page', function() {
        expect(browser.text('body')).to.equal(contents);
        done();
      })
    });
  })

  describe('/jobs', function() {

    var contents = "# Jobs at Acme Co. " +
      "Acme Co. is often seeking candidates in the areas of marketing, finance, customer support and sales. If you are an enthusiastic go-getter, you don't need to look any further for your next step up the corporate career ladder. " +
      "Send us an email at careers@acme.com for more information."

    it('renders data to the page', function(done) {
      browser.visit(url + 'jobs', function() {
        expect(browser.text('body')).to.equal(contents);
        done();
      })
    });
  })

  describe('/valves', function() {

    var contents = "# Valves " +
      "Acme Co. valves are amongst the highest quality in the industry. Whether it's for industrial, commercial, medical or space exploration, you can always count on an Acme Co. valve."

    it('renders data to the page', function(done) {
      browser.visit(url + 'valves', function() {
        expect(browser.text('body')).to.equal(contents);
        done();
      })
    });
  })

})
