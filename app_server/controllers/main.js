
/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'ONLINE BOOK STORE' });
};

module.exports = {
  index
};