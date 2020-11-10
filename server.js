var express = require("express");
var path = require("path");
const fs = require("fs");


var app = express();
var PORT = process.env.PORT || 5000;
app.use(express.static('public'));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/api_routes");
require("./routes/html_routes");

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});