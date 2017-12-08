const express = require('express');
const  path = require ('path');
const ejs = require('ejs');

//Init App
const app = express();

//Load View engine
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

//Home Route
app.get('/', function(req, res){
  res.render("index", {
    title:'Que es '
  });
});

app.get('/testing',function(req,res){
  res.render('testing');
});

//Start Server
app.listen(4567, function(){
  console.log('Server started on port 3000...')
});
