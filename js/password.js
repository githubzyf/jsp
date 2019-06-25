const url = "http://localhost:9527"
$(document).ready(function () {
    $.getJSON(url+"/user/user/selectPWD/1034",function(data){
     $("#user-old-password1").val(data.pwd);
    });

        $(".am-btn-danger").click(function () {
            var reslt = $("#pwd").val();
            var queren=$("#user-confirm-password").val();

           if (queren!=reslt){
               alert("两次密码输入不一致！");
                return false;
           }else{
               $.post(url+"/user/user/updatePwd/"+reslt,function(data){
                   if(data > 0){
                       alert("修改成功!");
                       location.reload();
                       $("#pwd").val("");
                       $("#user-confirm-password").val("");
                   }
               });
           }
        });

});
