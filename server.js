var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});