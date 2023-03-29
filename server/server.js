"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.listen(8080, function () {
    console.log('listening on 8080');
});
app.get('/', function (req, res) {
    res.send('반갑습니다.');
});
