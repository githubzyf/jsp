$(function () {
    iningoodst();

function iningoodst() {
    $.getJSON("http://localhost:9527/goods/com/type",function (data) {
        // alert(data.name)
        $(".shopTitle h4:eq(1)").html(data.name).attr("t_id",data.code)
        // alert(data.code)
        iningoodstype();
    })
}

function iningoodstype() {
    var tp_id=$(".shopTitle h4:eq(1)").attr("t_id")
    // alert(tp_id)
    $.getJSON("http://localhost:9527/goods/com/goods/typeAll/"+tp_id,function (data) {
        $.each(data,function (i,t) {
            if(t.type=="1"){
                return;
            }
            var img=t.image.substring(0,t.image.indexOf(","))
            if(i==1){
                $(".text-one:eq(0)").append(`<a href="../home/introduction.html?uid=`+t.id+`">
								<div class="outer-con ">
									<div class="title ">
										`+t.name.substring(10,t.name)+`</br>`+t.name.substring(10)+`
									</div>
									<div class="sub-title "style="color: red;">
										<strong>￥`+t.price+`.00</strong>
									</div>
								</div>
                                  <img src="`+img+`" uid="`+t.id+`""/>
							</a>`)
                return;
            }
                $(".am-u-lg-4:eq(1)").append(`<div class="text-two">
								<div class="outer-con ">
									<div class="title ">
										`+t.name+`
									</div>
									<div class="sub-title " style="color: red;">
										<strong>￥`+t.price+`.00</strong>
									</div>

								</div>
								<a href="../home/introduction.html?uid=`+t.id+`"><img src="`+img+`" style="width: 160px;height: 140px" uid="`+t.id+`" /></a>
							</div>`)






            // if(i>1){
            //     return
            // }


        })
    });
}
})