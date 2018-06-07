'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');
var UserInfo = require(process.cwd() + '/app/controllers/userInfo.server.js');
var NAME_API = '/api';
module.exports = function (app, client, cog) {


    app.route('/') .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

    //事例
    var clickHandler = new ClickHandler(client);
    app.route(NAME_API+'/clicks').post(clickHandler.getClicks);

    
    var userInfo = new UserInfo(client,cog);
    app.route(NAME_API+'/user/get').post(userInfo.getUserInfo);
    app.route(NAME_API+'/user/insert').post(userInfo.insertUserInfo);
};