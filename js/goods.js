$(function () {
    var uid=window.location.search;
    var t_id=uid.substring(uid.indexOf("=")+1,uid.length);
    var tid
    iningoods(t_id);
    function iningoods(t_id) {
        $.getJSON("http://localhost:9527/goods/com/getCom/"+t_id,function (data) {
            // alert(x)
            evl(data.id);
            tid=data.id
            $(".tb-detail-hd").text(data.name).css({"font-size":"22px","font-weight":"bold"});
            if(data.discount!=''){
                $(".sys_item_price").text((data.price*data.discount)+"0")//折后价
                $(".sys_item_mktprice").text(data.price+".00")      //原价
            }else {
                $(".sys_item_price").text(data.price+".00")
                $(".iteminfo_mktprice").css({"display":"none"})
            }
            $(".tm-count:eq(0)").text(data.sid.m_salesvolume) //月销量
            $(".tm-count:eq(1)").text(data.sid.sum_salesvolume)//累计销量
            $(".tm-count:eq(2)").text(data.sid.sum_evaluate)   //累计评价
            var array=new Array()
            array=data.image.split(",");
            $("#imgid1s").attr('big',array[0]);
            $("#imgid2s").attr('big',array[1]);
            $("#imgid3s").attr('big',array[2]);

            $("#imgid").attr('rel',array[0]);

            $("#imgid1s").attr('mid',array[0]);
            $("#imgid2s").attr('mid',array[1]);
            $("#imgid3s").attr('mid',array[2]);

            document.getElementById('imgid').src = array[0];
            document.getElementById('imgid1s').src = array[0];
            document.getElementById('imgid2s').src = array[1];
            document.getElementById('imgid3s').src = array[2];

            $("#J_AttrUL>li:eq(0)").text("产品类型:"+data.deta.type)
            $("#J_AttrUL>li:eq(1)").text("原料产地:"+data.deta.address)
            $("#J_AttrUL>li:eq(2)").text("产地配料表:"+data.deta.mixedingredients)
            $("#J_AttrUL>li:eq(3)").text("产品规格:"+data.deta.specifications)
            $("#J_AttrUL>li:eq(4)").text("保质期:"+data.deta.time)
            $("#J_AttrUL>li:eq(5)").text("产品标准号:"+data.deta.number)
            $("#J_AttrUL>li:eq(6)").text("生产许可证编号:"+data.deta.l_umbers)
            // alert(data.deta.L_umbers)
            $("#J_AttrUL>li:eq(7)").text("储存方法:"+data.deta.storagemode)
            $("#J_AttrUL>li:eq(8)").text("食用方法:"+data.deta.ediblemethod)
            arrays=data.deta.image.split(",");
            $.each(arrays,function (c,f) {
                $(".twlistNews").append(`<img src="`+f+`"/ style="width: 820px;height: 700px">`)
            })
            $.each(data.com_t,function (s,l) {
                    $(".am-form-group").append(`
  <label class="am-radio-inline" >
    <input type="radio" name="radio10" id="red" value="`+l.id+`" data-am-ucheck > `+l.type+`
  </label>`)//味道
                //初始化第一个味道
                $(".theme-options>ul>li:eq(0)").css({
                    "border":"2px solid red",
                })
            })
            var count=$(".numbers").val();
            var comtype=$("#red").val()
            purchase(data.id,comtype,count);
            //点击全部评价发送请求


        })

//设置味道边框
        $(".theme-options>ul").on("click","li", function() {

            $(this).css({
                "border":"2px solid red",
            })
            $(".theme-options>ul li").not($(this)).css({
                "border":"2px solid #F5F5F5",
            })
        });
    }
    function evl(e_id) {
        $("#clEvl").click(function () {
            $.getJSON("http://localhost:9527/goods/com/Evl/"+e_id,function (data) {
                $(".am-comments-list-flip").empty();
                $.each(data,function (j,s) {
                    // alert(s.comm.name)
                    if(s.name==''){
                        s.name="匿名";
                    }
                    var u_name=s.user.code.substring(0,1)+"***"+s.user.code.charAt(s.user.code.length - 1)+s.name
                    $(".am-comments-list-flip").append(`<li class="am-comment">
							<!-- 评论容器 -->
							<a href="">
								<img class="am-comment-avatar" src="`+s.user.titleimg+`"/>
								<!-- 评论者头像 -->
							</a>

							<div class="am-comment-main">
								<!-- 评论内容容器 -->
								<header class="am-comment-hd">
									<!--<h3 class="am-comment-title">评论标题</h3>-->
									<div class="am-comment-meta">
										<!-- 评论元数据 -->
										<a href="#link-to-user" class="am-comment-author">`+u_name+`</a>
										<!-- 评论者 -->
										评论于
										<time datetime="">`+s.time+`</time>
									</div>
								</header>

								<div class="am-comment-bd">
									<div class="tb-rev-item " data-id="255776406962">
										<div class="J_TbcRate_ReviewContent tb-tbcr-content ">
											`+s.content+`
										</div>
										<div class="tb-r-act-bar">
											<!--口味：`+111+`-->
										</div>
									</div>

								</div>
								<!-- 评论内容 -->
							</div>
						</li>`)
                })
            })
            // alert(e_id)
        })
    }

    function purchase(comid,comType,count) {
         $("#LikBuy").attr("href","pay.html?cid="+comid+'&cType='+comType+'&numb='+count);
    }
    $("#LikBuy").mouseover(function () {
        var count=$(".numbers").val();
        var comtype=$("#red").val()
        purchase(tid,comtype,count);
    })
})