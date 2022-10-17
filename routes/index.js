var express = require('express');
var router = express.Router();

var cityList = [
  {name: "Paris", desc: "Couvert", img:"/images/picto-1.png", temp_min:2, temp_max: 19},
  {name: "Marseille", desc: "Couvert", img:"/images/picto-1.png", temp_min:6, temp_max: 12},
  {name: "Lyon", desc: "Couvert", img:"/images/picto-1.png", temp_min:8, temp_max: 11},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req, res, next){
  res.render('weather', {cityList})
})

router.post('/add-city', function(req, res, next){

  var alreadyExist = false;

  for(var i=0; i<cityList.length;i++){
    if(req.body.newcity.toLowerCase() == cityList[i].name.toLowerCase() ){
      alreadyExist = true;
    }
  }

  if(alreadyExist == false){
    cityList.push({
      name: req.body.newcity,
      desc: "Couvert",
      img: "/images/picto-1.png",
      temp_min: 2,
      temp_max: 19
    })
  }
  

  res.render('weather', {cityList})
})

router.get('/delete-city', function(req, res, next){

  cityList.splice(req.query.position, 1)

  res.render('weather', {cityList})
})

module.exports = router;
