
var express = require("express");
var path = require("path");
var util = require('util');
var fs = require('fs');
var app = express();

   // Promises
   const writefileAsync = util.promisify(fs.writeFile);
   const readFileAsync = util.promisify(fs.readFile);
module.exports = function(app) {




app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    readFileAsync(path.join(__dirname, "../db/db.json"), "utf8")
        .then(function (data) {
            var notes = JSON.parse(data);
            notes.push(newNote);
            writefileAsync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
                .then(function () {
                })
        });
    res.json(newNote);
})

app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    readFileAsync(path.join(__dirname, "../db/db.json"), "utf8")
        .then(function (data) {
            let notes = JSON.parse(data);
            notes.splice(id, 1);
            writefileAsync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
                .then(function () {
                })
        })
    res.json(id);
});
}