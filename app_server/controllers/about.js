/* GET home page */
const about = function(req, res){
    res.render('about', { title: 'ABOUT THIS SITE' });
  };
  
  module.exports = {
    about
  };