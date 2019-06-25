const url = "http://localhost:9527"


$(document).ready(function () {
    $.getJSON(url + "/user/user/selectPhone/1003", function (data) {
       $("#user-phone1").html(data.phone);
    });
    //第一验证
    var checkCod = 0;
    /* 获取4位随机数*/
    $("#am-btn-danger1").click(function () {
        var phonehao = $("#user-phone1").html();//获取手机号
        checkCod = parseInt((Math.random() * 8999) + 1000);
            // 发送请求
        $.getJSON(url + "/sms/sms/send/" + phonehao + "/" + checkCod, function (result) {
                if (result) {
                    alert("短信发送成功" + phonehao);
                } else {
                    alert("短信发送失败" + phonehao);
                }
            });
    });

   //第二验证
    var checkCod1 = 0;
    /* 获取4位随机数*/
    $("#am-btn-danger2").click(function () {
        var haoma = $("#user-new-phone1").val();//获取手机号
        checkCod1 = parseInt((Math.random() * 8999) + 1000);
        // 发送请求
        $.getJSON(url + "/sms/sms/send/" + haoma + "/" + checkCod1, function (result) {
            if (result) {
                alert("短信发送成功" + haoma);
            } else {
                alert("短信发送失败" + haoma);
            }
        });
    });
      //保存
    $("#am-btn-danger3").click(function () {
        var yanzm= $("#user-code").val();
        var newyanzm=$("#user-new-code").val();
        var newphonw= $("#user-new-phone1").val();
        alert(newphonw);
        $.getJSON(url + "/user/user/modifyPhone/1003/"+newphonw, function (data) {
         if (data>0){
             alert("绑定号码成功！");
             location.reload();
         }
        });

        if (checkCod!=yanzm && checkCod1!=newyanzm){
            alert("验证码输入错误！");
            false;
        }
    })

});
