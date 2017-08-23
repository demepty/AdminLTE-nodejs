module.exports={
    index: function (req,res,next) {
        res.render('index', { title: 'AdminLTE' });
    },
  inicio: function (req, res,next) {
      res.render('inicio',{title:'Express2'});
      
  }    
};