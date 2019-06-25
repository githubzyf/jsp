const url = "http://localhost:9527"
$(document).ready(function () {
    $.getJSON(url+"/user/user/selectID/1003",function(data){
        $("#user-name1").val(data.name);
        $("#user-name2").val(data.nickname);
        $("input:radio[value='"+data.sex+"']").attr('checked','true');
        $("#user-phone1").val(data.phone);
        $("#user-email1").val(data.email);

    });
    $("#info-btn").click(function () {
      /*  alert(nc)*/
    /*    var na=$("input:eq(8)").val();
        var nb=$("input:eq(9)").val();
        var nc=$("input:eq(10)").val();
        var nn=na+"-"+nb+"-"+nc;
*/
        var reslt = $(".am-form-horizontal").serialize();
       /* $("#nian1").val(date('Y-m-d',data.birthday));*/
        $.post(url+"/user/user/modify?"+reslt,function(data){
            if(data > 0){
                alert("修改成功!");
            }
        });

    });

});
