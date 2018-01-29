const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();

function getData(dir){
  return fs.readFileSync(path.join(__dirname,`content/${dir}/index.md`)).toString()
}

app.get('/about-page', function(req, res){
  res.send('acme-corp')
});

app.get('/jobs', function(req, res){
  res.send('acme-corp')
});

app.get('/valves', function(req, res){
  res.send('acme-corp')
});


app.listen(3000, function(){
  console.log('Server started on port 3000')
})

module.exports = {
  app,
  getData
}
