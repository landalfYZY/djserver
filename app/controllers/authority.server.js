'use strict';
/**
 * 权限表
 */
function authority(client, cog){

    var col = client.db(cog.dbName).collection('authority');

    var filterEntity = function (data) {
        var filter = {}
        filter.label = data['label'];
        filter.value = data['value'];
        return filter
    }

    this.insertItem = function (req,res){

    }
}