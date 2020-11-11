const path = require("path");
const fs = require("fs");
module.exports = function (app) {



    // read JSON
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", 'utf-8', function (err, data) {
            res.json(JSON.parse(data));
            console.log(data)
        });
    })
};
app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});


/* // Save Notes
app.post("/api/notes", function (req, res) {
    notes.push(req.body);
    console.log(notes);
    res.json(req.body);
})
 */

