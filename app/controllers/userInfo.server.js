'use strict';
function userInfo (client,dbName) {
    var col = client.db(dbName).collection('userInfo');

    this.getUserInfo = function(req, res) {
        col.find({}).toArray(function(err,result){
            if(err) throw err;
            if(result){
                res.json(result);
            }
        })
    }
    this.insertUserInfo = function(req, res){
        console.log(req,res)
    }
}
module.exports = userInfo;