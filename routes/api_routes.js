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



/// Save Notes
app.post("/api/notes", function (req, res) {
    notes.push(req.body);
    console.log(notes);
    res.json(req.body);
})
 

