const url = "http://localhost:9527"
$(document).ready(function () {
 /*   //验证账号
    function checkUser() {
        if (!/^[a-zA-Z0-9]{4,16}$/.test($("#userh").val())) {
            alert("账号不正确");
            return false;
        } else {
            window.location.href = 'home3.html';
        }
    }*/

    //验证手机号
    function phone() {

        if (!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test($("#userh").val())) {

        } /*else {
            window.location.href = 'home3.html';
        }*/
    }


    $("#am-cfc").click(function () {
            var userh = $("#userh").val();
            var passwordmima = $("#passwordmima").val();
           if (phone()){
               $.getJSON(url + "user/user/Login/" + userh + "/" + passwordmima, function (data) {

               });
               window.location.href = 'home3.html';
             }

        }
    );


});