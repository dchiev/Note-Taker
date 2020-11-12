var express = require("express");
var path = require("path");
var util = require('util');
var fs = require('fs');
var app = express();

// Promises 
const readFileAsync = util.promisify(fs.readFile);

module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/api/notes", function (req, res) {
        readFileAsync(path.join(__dirname, "../db/db.json"), "utf8")
            .then(function (data) {
                return res.json(JSON.parse(data));
            })
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};