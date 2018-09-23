
export default {
    DATE(haomiao){
        var date = new Date(haomiao);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = '';
        if(date.getHours()<10){
             h ="0" + date.getHours() + ':';
        }else{
             h = date.getHours() + ':';
        }
        var m = '';
        if(date.getMinutes()<10){
            m ="0" + date.getMinutes() + ':';
        }else{
            m = date.getMinutes() + ':';
        }
        var s = '';
        if(date.getSeconds()<10){
            s ="0" + date.getSeconds();
        }else{
            s = date.getSeconds();
        }
        return Y+M+D+h+m+s;
    },

}
