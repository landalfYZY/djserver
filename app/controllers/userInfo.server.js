'use strict';
function userInfo(client, cog) {

    var col = client.db(cog.dbName).collection('userInfo');

    var filterEntity = function (data) {
        var filter = {}
        filter.telNumber = data['telNumber'];
        filter.password = data['password'];
        filter.status = data['status'];
        return filter
    }

    /**
     * @api {post} /api/user/get 用户登录
     * @apiDescription 用户登录
     * @apiName get
     * @apiGroup userInfo
     * @apiParam {string} loginName 用户名
     * @apiParam {string} loginPass 密码
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "success" : "true",
     *      "result" : {
     *          "name" : "loginName",
     *          "password" : "loginPass"
     *      }
     *  }
     * @apiSampleRequest http://localhost:3000/api/user/submit-login
     * @apiVersion 1.0.0
     */
    this.getUserInfo = function (req, res) {
        col.find({}).toArray(function (err, result) {
            if (err) throw err;
            if (result) {
                res.json(global.filterResult(1000,'success',result));
            }
        })
    }

    /**
     * @api {post} /api/user/insert 用户注册
     * @apiDescription 用户注册
     * @apiName insert
     * @apiGroup userInfo
     * @apiParam {string} telNumber 用户名
     * @apiParam {string} password 密码
     * @apiParam {string} lpassword 确认密码
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "success" : "true",
     *      "result" : {
     *          "name" : "loginName",
     *          "password" : "loginPass"
     *      }
     *  }
     * @apiSampleRequest http://localhost:8000/api/user/insert
     * @apiVersion 1.0.0
     */
    this.insertUserInfo = function (req, res) {
        var filter = filterEntity(req.body)
        //判断参数telNumber(电话号码)是否是11位
        if(filter.telNumber && filter.telNumber.length == 11){
            var params = global.filterParams(filter);
            col.insertOne(params, function (err, data) {
                if (err) throw err;
                res.json(global.filterResult(1000,'注册成功',{_id:data.ops[0]._id}));
            });
        }else{
            res.json(global.filterResult(1001,'手机号码不存在或小于11位字符'));
        }
        
    }
}
module.exports = userInfo;