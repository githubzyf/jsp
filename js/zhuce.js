const url = "http://localhost:9527"

    $(document).ready(function () {

    /*手机号码注册*/
    $("#am-cf1").click(function () {

        var yzm = $("#code1").val();
        if (checkCod!=yzm) {
            alert("验证码错误")
            return false;
        }
        if (shouji()) {
            var phone=$("#phone").val();
            var pwd1=$("#pwd1").val();
            $.getJSON(url+"/user/user/inserPhomeUser/"+phone+"/"+pwd1, function(data){

                });

            window.location.href = 'login.html'
        }else{
            alert("密码错误")
        }
    })
    $("#code").blur(checkUser);
    $("#passwordRepeat").blur(checkPwd);

    /*密码确认*/
    function qeuren() {
        var mm = $("#pwd").val();
        var qr = $("#passwordRepeat").val();
        if (mm != qr) {
            return false;
        } else {
            return true;
        }
    }

   //验证账号 用户名正则
    function checkUser() {
        if (!/^[a-zA-Z0-9]{4,16}$/.test($("#code").val())) {
            alert("账号格式不正确");

            return false;
        } else {
            return true;
        }

    }
//A-Z 0-9 6-16位
    function checkPwd() {
        if (!/^[A-Za-z0-9]{6,16}$/.test($("#passwordRepeat").val())) {
            alert("密码格式不正确");

            return false;
        } else {
            return true;
        }

    }
    /*手机号验证*/
    function phone() {
        if (!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test($("#phone").val())) {
            alert("手机号不正确" + $("#phone").val());
            return false;
        }
            return true;


    }
    function shouji() {
        var mm = $("#pwd1").val();
        var qr = $("#passwordRepeat1").val();
        if (mm != qr) {
            return false;
        } else {
            return true;
        }
    }
  var checkCod = 0;
        /* 获取4位随机数*/
        $("#dyMobileButton").click(function () {

            //验证手机号
            if (phone()) {
                var phonehao = $("#phone").val();//获取手机号
                checkCod = parseInt((Math.random() * 8999) + 1000);
                // 发送请求
                $.getJSON(url + "/sms/sms/send/" + phonehao + "/" + checkCod, function (result) {
                    if (result) {
                        alert("成功" + phonehao);
                    } else {
                        alert("失败" + phonehao);
                    }
                });
            }
        });
});