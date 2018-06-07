'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongo = require('mongodb').MongoClient;

var app = express();
var url = 'mongodb://www.sunwou.com:27017/';
var dbName = 'dajiaoa';
mongo.connect(url, function (err, client) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, client,dbName);

    app.listen(8000, function () {
        console.log('Listening on port 8000...');
    });

});
