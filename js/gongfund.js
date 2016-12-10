$(function(){
	(function(){
		// 公募基金主页切换
		$(".gong_mark_wrap .itme_hd .tab_control_item").on("click",function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
		// 公募基金产品页切换
		changes($(".gongfund_in_wrap_hd .tab_hd_item"),$(".gongfund_in_wrap_bd .tab_bd_item"));
		function changes(hd,bd){
			hd.on("click",function(){
				var index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				bd.eq(index).addClass('active').siblings().removeClass('active');
			})
		}
	})(jQuery);
	(function(){
		// 公募基金开户页面的银行选择
		$(".gong_money_open02 .choose_bank .bank li").click(function(event) {
			//$(this).addClass('active').siblings('li').removeClass('active');
			$(".gong_money_open02 .choose_bank .bank li").removeClass('active');
			$(this).addClass('active');
		});
		var switchs = 0;
		$(".gong_money_open02 .choose_bank .bank .more").click(function(event) {
			if(switchs == 0){
				$(".gong_money_open02 .choose_bank .bank .show").css("display","block");
				$(".gong_money_open02 .choose_bank .bank .more span").html("收起");
				switchs = 1;
			}else {
				$(".gong_money_open02 .choose_bank .bank .show").css("display","none");
				$(".gong_money_open02 .choose_bank .bank .more span").html("显示更多");
				switchs = 0;
			}
		})
	})(jQuery);
	(function(){
		// 公募基金赎回，银行卡操作
		function showbox(){
			$(".gong_atoneback_in .form .wrap .content .box").css("display","block");
		}
		function hidebox(){
			$(".gong_atoneback_in .form .wrap .content .box").css("display","none");
		}
		$(".gong_atoneback_in .form .wrap .content .tips").on("click",function(event){
			event.stopPropagation();
			showbox();
		})
		$(".gong_atoneback_in .form .wrap .content .card").on("click",function(){
			//console.log($(this).html());
			var aaa = $(this).clone();
			$(".gong_atoneback_in .form .wrap .content .tips").html(aaa);
			hidebox();
			console.log($(this).find("img").attr("data-num"))
		})
		$(window).click(function(){
			hidebox();
		})
	})(jQuery);
	// 公募风险测评
	(function(){
		var sum = 0;
		$(".gong_test .wrap_test label").click(function() {
			$(this).parent('p').addClass('active').siblings().removeClass('active');
		})
		$(".gong_test_end").click(function() {
			sum = parseInt( $('.gong_test .wrap_test p input:radio[name="a"]:checked').val() )
	    		+ parseInt( $('.gong_test .wrap_test p input:radio[name="b"]:checked').val() )
	    		+ parseInt( $('.gong_test .wrap_test p input:radio[name="c"]:checked').val() )
				+ parseInt( $('.gong_test .wrap_test p input:radio[name="d"]:checked').val() )
	    		+ parseInt( $('.gong_test .wrap_test p input:radio[name="e"]:checked').val() )
				+ parseInt( $('.gong_test .wrap_test p input:radio[name="f"]:checked').val() )
	    		+ parseInt( $('.gong_test .wrap_test p input:radio[name="g"]:checked').val() )
				+ parseInt( $('.gong_test .wrap_test p input:radio[name="h"]:checked').val() )
	    		+ parseInt( $('.gong_test .wrap_test p input:radio[name="i"]:checked').val() )
				+ parseInt( $('.gong_test .wrap_test p input:radio[name="j"]:checked').val() );
				alert(sum)
			$('.gong_tips_pop').css({
	    		display:'block'
	    	});
			//$(window).scrollTop(0);
	    	if( sum > 23 && sum < 53 ){
	    		$(".gong_tips_pop .center .pic .text").html("恭喜您属于稳健型投资者")
	    	}else if ( sum >= 54 && sum <= 70 ){
	    		$(".gong_tips_pop .center .pic .text").html("恭喜您属于积极型投资者")
	    	}else if ( sum <= 22 ){
	    		$(".gong_tips_pop .center .pic .text").html("恭喜您属于保守型投资者")
	    	}
		})
	})(jQuery);

})

// 公募基金主页显示弹窗
function showpop(box){
	box.css("display","block");
}
function hidepop(box){
	box.css("display","none");
}
