var express = require('express');
var fs = require('fs');
const path = require('path');
var app = express();


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var pathImage = path.resolve(__dirname, '../uploads/' + tipo + '/' + img);
    if (fs.existsSync(pathImage)) {
        res.sendFile(pathImage);
    } else {
        var pathNoimagen = path.resolve(__dirname, '../assets/no-img.jpg')
        res.sendFile(pathNoimagen);
    }



});

module.exports = app;