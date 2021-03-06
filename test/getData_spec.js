const chai = require('chai')
const expect = require('chai').expect
const fs = require('fs')
const getData = require('../app').getData

describe('getData', function() {

  var contents = "# This is the About page"

  it('brings back the contents from the file', function() {
    var dir = 'about-page'
    expect(getData(dir)).to.contain(contents)
  });
});
