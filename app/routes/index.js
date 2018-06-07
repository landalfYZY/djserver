'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');
var UserInfo = require(process.cwd() + '/app/controllers/userInfo.server.js');

module.exports = function (app, client, dbName) {

    
    
    app.route('/') .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

    //事例
    var clickHandler = new ClickHandler(client);
    app.route('/api/clicks').post(clickHandler.getClicks);

    var userInfo = new UserInfo(client,dbName);
    app.route('/api/user/get').post(userInfo.getUserInfo);
    app.route('/api/user/insert').post(userInfo.insertUserInfo);
};