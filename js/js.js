$(function () {
	var center_height=$(".center_zong").height();
	// console.log(center_height);
	for (var i=0; i<$(".center_zong>ul").children("li").length;i++) {
		$(".center_zong>ul").children("li")[i].style.height=center_height+"px";
	}
	// $(".center_zong_move").children("div").height(center_height);


/*随机色 变色*/

	function yanse() {
		var array=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
		var color="";
		for (var i=0;i<6;i++) {
			var n=Math.ceil(Math.random()*15);
			color+=array[n];
			if (i==5) {
		    	return "#"+color;
			}
		}
	}
	function bianse() {
		$(".center2_p3").css("background-color",yanse());
	//名字栏：朱朝阳的个人简历 字体变色	
		for ( var i=0; i<$(".sence_title").children("span").length;i++) {
			$(".sence_title").children("span").eq(i).css("color",yanse());
		}
	//作品、项目 字体变色	
		for (var i=0; i<$(".zp_line_top").children("div").length; i++) {
			$(".zp_line_top").children("div").eq(i).css({"background-color":yanse()})
			$(".zp_line_bottom").children("div").eq(i).css({"background-color":yanse()})
			$(".xm_line_top").children("div").eq(i).css({"background-color":yanse()})
			$(".xm_line_bottom").children("div").eq(i).css({"background-color":yanse()})
		}
		for (var i=0; i<$(".zp_line_right").children("div").length; i++) {
			$(".zp_line_right").children("div").eq(i).css({"background-color":yanse()})
			$(".zp_line_left").children("div").eq(i).css({"background-color":yanse()})
			$(".xm_line_right").children("div").eq(i).css({"background-color":yanse()})
			$(".xm_line_left").children("div").eq(i).css({"background-color":yanse()})
		}

	}

	var bian_color=null;
	bian_color=setInterval(bianse,100);

//作品、项目字体缩放效果
	
	$(function(){
		var zhuye_kg="on";
		function text_big(){
			if (zhuye_kg=="on") {
				$(".zp,.xm").children("li").children("a").stop().animate({"font-size":"40px"},2000)
				zhuye_kg="off";
			} else if (zhuye_kg=="off") {
				$(".zp,.xm").children("li").children("a").stop().animate({"font-size":"0px"},2000)
				zhuye_kg="on";
			}
		}
		setInterval(text_big,2000)
	})
//作品、项目简介tab菜单
	for ( var i=0;i<$(".xm").children("li").length; i++ ) {
		$(".xm").children("li")[i].index=i;
		$(".xm").children("li").mouseover(function(){
			for ( var i=0;i<$(".xm").children("li").length; i++ ) {
				$(".xm_jj").eq(i).stop().hide();	
			}
			$(".xm_jj").eq(this.index).stop().fadeIn(500);
		})
	}
	$(".xiangmu").mouseout(function(){
		$(".xm_jj").fadeOut(500);
	})






//返回双数
	function tDouble(n) {
		if (n<10) {
			return "0" + n ;
		} else {
			return "" + n  
		}
	}	
/*手机菜单栏 跟随系统时间*/

	var oPhone_time=document.getElementById('phone_time');
	var P_t=null;
	// console.log(oPhone_time);
	function Phone_time() {
		var myDate=new Date ();
		var dNow=tDouble(myDate.getHours())+"&nbsp;:&nbsp;"+tDouble(myDate.getMinutes())+"&nbsp;:&nbsp;"+tDouble(myDate.getSeconds());
		oPhone_time.innerHTML=dNow;	
		// console.log(dNow)
	}
	P_t=setInterval(Phone_time,1000);



/*点换盒子*/	

	
	var lb_length=$(".center_btn>ul").children("li").length;
	for ( i=0; i<lb_length; i++) {
		$(".center_btn>ul").children("li")[i].index=i;	
		$(".center_btn>ul").children("li").eq(i).click(function(){
			clearInterval(center_zong_timer);						  
			for ( i=0; i<lb_length; i++) {		  		
				$(".center_btn>ul").children("li").eq(i).attr("id","");				  
			}	
			$(".center_btn>ul").children("li").eq(this.index).attr("id","center_btn_active");			  
	  		$(".center_zong_move").stop(false,true).animate({top:-(100*(this.index))+"%"},500,function(){
	  			$(".center_item").hide();
	  			$(".center_item").eq(num).show();
	  		});														
			num=this.index;	
		})	
	}
//轮播的暂停与启动
	$("#phone_client,.ctrl_panel").mouseover(function(){
		clearInterval(center_zong_timer);
	})
	$("#phone_client,.ctrl_panel").mouseout(function(){
		center_zong_timer=setInterval(center_zong_lb,15000);
	})
// /*轮播盒子*/	
	var num=0;
	var center_zong_timer=null;
	function center_zong_lb() {
		for (var i=0; i<lb_length; i++) {			  
			$(".center_btn>ul").children("li").eq(i).attr("id","");	
		}
		if (num<8) {								 
			num++;									 
		} else {
			num=0;									 
		}
		$(".center_btn>ul").children("li").eq(num).attr("id","center_btn_active");				  
  		$(".center_zong_move").stop(false,true).animate({top:-(100*num)+"%"},500,function(){
 	  			$(".center_item").hide();
	  			$(".center_item").eq(num).show(); 			
  		});				 
	}
	center_zong_timer=setInterval(center_zong_lb,15000);							 

/*上下页点换盒子*/	

// 上页
	$("#prev_page").click(function(){
		clearInterval(center_zong_timer);					  
		for (var i=0; i<lb_length; i++) {			  
			$(".center_btn>ul").children("li").eq(i).attr("id","");	
		}
		if (num>0) {								 
			num--;									 
		} else {
			num=8;									 
		}
		$(".center_btn>ul").children("li").eq(num).attr("id","center_btn_active");				  
  		$(".center_zong_move").stop(false,true).animate({top:-(100*num)+"%"},500,function(){
  			$(".center_item").hide();
  			$(".center_item").eq(num).show(); 	
  		});	
	})

// 下页
	$("#next_page").click(function(){
		clearInterval(center_zong_timer);					  
		for (var i=0; i<lb_length; i++) {			  
			$(".center_btn>ul").children("li").eq(i).attr("id","");	
		}
		if (num<8) {								 
			num++;									 
		} else {
			num=0;									 
		}
		$(".center_btn>ul").children("li").eq(num).attr("id","center_btn_active");				  
  		$(".center_zong_move").stop(false,true).animate({top:-(100*num)+"%"},500,function(){
  			$(".center_item").hide();
  			$(".center_item").eq(num).show(); 	
  		});	
	})





/*是否隐藏底部按钮*/
	var cen_btn=null;
	$("#phone_client").mouseover(function () {
		clearTimeout(cen_btn);
		$(".center_btn").css("display","block");
	});

	$("#phone_client").mouseout(function () {
		clearTimeout(cen_btn);
		cen_btn=setTimeout(function () {
			$(".center_btn").css("display","none");
		},300)
	});

/*center2_pic0 动画*/
	// function aaa() {
	// 	if($(".center2_pic0")[0].style.display=="block") {
	// 		$(".center2_pic0")[0].style.display="none";
	// 	} else {
	// 		$(".center2_pic0")[0].style.display="block";
	// 	}
	// }
	// var bb=null;
	// bb=setInterval(aaa,300)








 





























// }

})