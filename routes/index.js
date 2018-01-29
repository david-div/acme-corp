// this is so the page is able to stay as html, rather than ejs
exports.index = function(req, res){
res.render('index', { title: 'ejs' })};
