var express = require("express");
var path = require("path");
var util = require('util');
var fs = require('fs');
var app = express();

var PORT = process.env.PORT || 5000;

// Promises
const writefileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));


app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    readFileAsync(path.join(__dirname, "./db/db.json"), "utf8")
        .then(function (data) {
            return res.json(JSON.parse(data));
        })
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    readFileAsync(path.join(__dirname, "./db/db.json"), "utf8")
        .then(function (data) {
            var notes = JSON.parse(data);
            notes.push(newNote);
            writefileAsync(path.join(__dirname, "./db/db.json"), JSON.stringify(notes))
                .then(function () {
                })
        });
    res.json(newNote);
})

app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    readFileAsync(path.join(__dirname, "./db/db.json"), "utf8")
        .then(function (data) {
            let notes = JSON.parse(data);
            notes.splice(id, 1);
            writefileAsync(path.join(__dirname, "./db/db.json"), JSON.stringify(notes))
                .then(function () {
                })
        })
    res.json(id);
});


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});