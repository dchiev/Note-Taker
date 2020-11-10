const path = require("path");

module.exports = function(app) {


app.get("/api/notes", function (req,res){
    res.sendFile(path.join(__dirname, "/db/db.json"))
})};
