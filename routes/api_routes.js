const path = require("path");
const fs = require("fs");
module.exports = function(app) {

/* var userNotes = fs. readFileSync(".db/db.json", "utf-8");
if (userNotes) {
    var pastNotes = JSON.parse(userNotes);
    notes = pastNotes;
}
else {
    notes = [];
}
 */
app.get("/api/notes", function (req,res){
    fs.readFile("./db/db.json", 'utf-8',function(err, data){
        res.json(JSON.parse(data));
    });
})};
