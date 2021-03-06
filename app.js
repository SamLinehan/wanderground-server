var Express = require("express");
var app = Express();
var server = require('http').Server(app)
var request = require("request");
var cors = require("cors");
require("dotenv").config();

app.use(cors());

server.listen(process.env.PORT || 3000, function(){
  console.log('listening')
})

app.get("/data", function(req, res) {
  request("http://api.openweathermap.org/data/2.5/forecast/city?id=4940625&APPID=" + process.env.WEATHER_API_KEY + "&units=imperial", function(error, response, body) {
    if(error) {
      console.log("Error! Request failed - " + error);
    } else if(!error && response.statusCode === 200) {
      res.send(body);
    }
  });
})
