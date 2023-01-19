const express = require("express");
const https = require("https");

const app = new express();

app.get("/", function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b99a475fb512bf7f07805b1a58550d71&units=metric";

  https.get(url, function(response){
    console.log(response);
  });

  res.send("Server is up and running");
});

app.listen(3000, function(){
  console.log("Server is running on 3000");
});
