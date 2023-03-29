"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var mongoDb = require("mongodb");
var dotenv = require("dotenv");
var cors = require("cors");
dotenv.config();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var MongoClient = mongoDb.MongoClient;
var connection = MongoClient.connect("mongodb+srv://".concat(process.env.MONGO_USER_NAME, ":").concat(process.env.MONGO_PASSWORD, "@").concat(process.env.MONGO_CLUSTER_NAME, ".jy2zpck.mongodb.net/?retryWrites=true&w=majority"));
var db;
connection
    .then(function (client) {
    db = client.db('amazon');
    app.listen(process.env.PORT, function () {
        console.log('listening on 1116');
    });
    app.get('/search', function (req, res) {
        res.json('테스트 문자열');
    });
})["catch"](function (err) {
    console.log("\uC5D0\uB7EC \uBC1C\uC0DD: ".concat(err));
});
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/server-index.html');
// });
//
// app.get('/test', (req, res) => {
//   res.send('이렇게 하면 dom구조 어뜨케 되지');
// });
