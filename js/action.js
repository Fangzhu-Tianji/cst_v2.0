$(function(){

	//	-------------------------- 首页banner底部滚轮start  -----------------------
	(function(){
		var s1Text = [
			{ 'url':'###','title':'公告：热烈庆祝财视通官网正式上线！！！！热烈庆祝财视通官网正式上线！！！' },
			{ 'url':'###','title':'公告：热烈庆祝财视通官网正式！' },
			{ 'url':'###','title':'公告：热烈庆祝财视通官网正3333！' },
		];
		var s2Text = [
			{ 'url':'###','title':'奥斯卡奖：年度最佳财富管理平台1' },
			{ 'url':'###','title':'奥斯卡奖：年度最佳财富管理平台2' },
			{ 'url':'###','title':'奥斯卡奖：年度最佳财富管理平台3' },
		];
		var s3Text = [
			{ 'url':'###','title':'：第十届中国最具投资价值企业20强1' },
			{ 'url':'###','title':'：第十届中国最具投资价值企业20强2' },
			{ 'url':'###','title':'：第十届中国最具投资价值企业20强3' },
		];
			//	封装ul,li函数
		function fn(Text,oUl){
			var str = '';
			for ( var i=0; i<Text.length; i++) {
				str += '<li><a href="' + Text[i].url + '" target="_blank">' + Text[i].title + '</a></li>'
			}
			oUl.append(str);
		}
		function fnclo(oUlf,oUl){
			var tag = oUlf.clone();
			oUl.append(tag);
		}
		fn( s1Text,$('.idx_scroll_ad .scroll1 ul') );
		fnclo( $('.idx_scroll_ad .scroll1 ul li:first'),$('.idx_scroll_ad .scroll1 ul') );
		fn( s2Text,$('.idx_scroll_ad .scroll2 ul') );
		fnclo( $('.idx_scroll_ad .scroll2 ul li:first'),$('.idx_scroll_ad .scroll2 ul') );
		fn( s3Text,$('.idx_scroll_ad .scroll3 ul') );
		fnclo( $('.idx_scroll_ad .scroll3 ul li:first'),$('.idx_scroll_ad .scroll3 ul') );
		
		var num1 = 0;
		var num2 = 0;
		var num3 = 0;
        var timer1 = null;
        var timer2 = null;
        var timer3 = null;
        function autoPlay1(){
            num1++;
            if ( num1 > 3){
                num1 = 1;
                $('.idx_scroll_ad .scroll1 ul').css({top:0})
            }

            $('.idx_scroll_ad .scroll1 ul').animate({top:-60*num1},500);
        };
        function autoPlay2(){
            num2++;
            if ( num2 > 3){
                num2 = 1;
                $('.idx_scroll_ad .scroll2 ul').css({top:0})
            }

            $('.idx_scroll_ad .scroll2 ul').animate({top:-60*num2},500);
        };
        function autoPlay3(){
            num3++;
            if ( num3 > 3){
                num3 = 1;
                $('.idx_scroll_ad .scroll3 ul').css({top:0})
            }

            $('.idx_scroll_ad .scroll3 ul').animate({top:-60*num3},500);
        };
        timer1 = setInterval( autoPlay1 ,5000);
        timer2 = setInterval( autoPlay2 ,5000);
        timer3 = setInterval( autoPlay3 ,5000);
        
		//	鼠标经过时停止自动播放
		function uHover(item,timer,auto){
			item.hover(function(){
				clearInterval( timer );
			},function(){
				clearInterval( timer );
				timer = setInterval( auto ,5000 );
			})
		};
		uHover( $('.idx_scroll_ad .scroll1'),timer1,autoPlay1 );
		uHover( $('.idx_scroll_ad .scroll2'),timer2,autoPlay2 );
		uHover( $('.idx_scroll_ad .scroll3'),timer3,autoPlay3 );
		
	})(jQuery);


//  --------------------- 信托 ------------------
(function(){
	var num = 0;
	$('.truse_pro_main .truse_pro_tab_hd .tab_hd_item').click(function(){
		num = $(this).index();
		zchswitch( $('.truse_pro_main .truse_pro_tab_hd .tab_hd_item') );
		zchswitch( $('.truse_pro_main .truse_pro_tab_bd .tab_bd_item') );
	});
	function zchswitch(switch_in){
		switch_in.eq(num).addClass('active').siblings().removeClass('active');
	};
	
	
})(jQuery);
	

//	------------------------- 关于我们_管理团队   ------------------------
	
	(function($){
		var tag = $('.about_teams .pic_in_in .page').clone();
		$('.about_teams .pic_in_in').append(tag);
		var num = 0;
		var num1 = 22;
		var num2 = 2;
		
		$('.about_teams .pic .next').click(function(){
			num++;
			num1++;
			num2++;
			if( num2 > 4 ){
				num2 = 0;
			}
			$('.about_teams .title .list').eq(num2).stop().fadeIn(400).siblings('.about_teams .title .list').stop().fadeOut(400);
			$('.about_teams .pic_in_in').stop().animate({
				left: -num*199-3980
			},500)
			$('.about_teams .pic_in_in .page').eq(num1).stop().animate({
				width:'256px',
				height:'256px',
				marginTop:'0'
			},500).siblings().stop().animate({
				width:'175px',
				height:'175px',
				marginTop:'40px'
			},500);
			
			$('.about_teams .pic_in_in .page').eq(num1).children().stop().fadeOut(400).parent().siblings().children().stop().fadeIn(400)
		});
		
		$('.about_teams .pic .prev').click(function(){
			num--;
			num1--;
			num2--;
			if( num2 < 0 ){
				num2 = 4;
			}
			$('.about_teams .title .list').eq(num2).stop().fadeIn(400).siblings('.about_teams .title .list').stop().fadeOut(400);
			$('.about_teams .pic_in_in').stop().animate({
				left: -num*199-3980
			},500)
			$('.about_teams .pic_in_in .page').eq(num1).stop().animate({
				width:'256px',
				height:'256px',
				marginTop:'0'
			},500).siblings().stop().animate({
				width:'175px',
				height:'175px',
				marginTop:'40px'
			},500);
			
			$('.about_teams .pic_in_in .page').eq(num1).children().stop().fadeOut(400).parent().siblings().children().stop().fadeIn(400)
		});
		
		
		
	})(jQuery);


//  --------------------  关于我们_办公环境    --------------
	(function($){
		//要先克隆一组
		var tag = $('.about_office .main li').clone();
		$('.about_office .main ul').append(tag);
		
		var tag = $('.about_office_pop_in .pop_main li').clone();
		$('.about_office_pop_in .pop_main ul').append(tag);

		//计算UL中li的总宽度
		//每个li的宽度*个数
		var oneWidth = $('.about_office .main li').outerWidth(true);
		//alert(oneWidth);
		var liNum = $('.about_office .main li').length;
		//alert(liNum);
		var all = oneWidth*liNum/2;
		//alert(all);

		//1.开启定时器
		var timer=null;
		var num=0;
		function autoPlay(){
			//2. 累加器在指令内部变化
			num-=1;
			if(num < -all){
				num=0;
			}
			$('.about_office .main ul').css({left:num});
		}
		timer = setInterval(autoPlay,30);
		$('.about_office .main').hover(function(){
			clearInterval( timer );
		},function(){
			clearInterval( timer );
			timer = setInterval(autoPlay,30);
		});
		
		var lIndex = 0;
		$('.about_office .main li').click(function(){
			lIndex = $(this).index();
//			console.log( lIndex );
			$('.about_office_pop').css({display:'block'});
			$('.about_office_pop_in .pop_main li').eq(lIndex).css({display:'block'}).siblings().css({display:'none'});
			
		});
		$('.about_office_pop_in .close').click(function(){
			$('.about_office_pop').css({display:'none'});
		});
		$('.about_office_pop_in .prev').click(function(){
			lIndex--;
			if( lIndex < 0 ){
				lIndex = 10;
			}
			$('.about_office_pop_in .pop_main li').eq(lIndex).fadeIn(400).siblings().fadeOut(400);
		});
		$('.about_office_pop_in .next').click(function(){
			lIndex++;
			if (lIndex > 9){
				lIndex = 0;
			}
			$('.about_office_pop_in .pop_main li').eq(lIndex).fadeIn(400).siblings().fadeOut(400);
		});
		
	})(jQuery);
 
// --------------------------------  关于我们滚动导航    -----------------------
	(function($){
		//var oh = $('.about_nav').offset().top;
		var oh = 130;
		$(window).scroll(function(event){
			var h = $(window).scrollTop();
			// console.log(h)
			if( h>=oh ){
				$('.about_nav').css({
					position:'fixed',
					top:'0',
					zIndex:'999999',
					opacity:'.9'
				})
			}else{
				$('.about_nav').css({
					position: 'static',
					opacity:'1'
				})
			}
			if ( h<755){
				$('.about_nav_container li').children().removeClass('active');
				$('.about_nav_container li').eq(0).children().addClass('active');
			}
			else if( h>=755 && h<1200 ){
				$('.about_nav_container li').children().removeClass('active');
				$('.about_nav_container li').eq(1).children().addClass('active');
			}
			else if( h>=1200 && h<1950 ){
				$('.about_nav_container li').children().removeClass('active');
				$('.about_nav_container li').eq(2).children().addClass('active');
			}
			else if( h>=1950 && h<2530 ){
				$('.about_nav_container li').children().removeClass('active');
				$('.about_nav_container li').eq(3).children().addClass('active');
			}
			else if( h>=2530 && h<3050 ){
				$('.about_nav_container li').children().removeClass('active');
				$('.about_nav_container li').eq(4).children().addClass('active');
			}
			else if( h>=3050 ){
				$('.about_nav_container li').children().removeClass('active');
				$('.about_nav_container li').eq(5).children().addClass('active');
			}
		})/*滚轮事件*/
		
		$('.about_nav_container li').eq(0).click(function(){
			$('html,body').animate({
				scrollTop:0
			},400);
		});
		$('.about_nav_container li').eq(1).click(function(){
			$('html,body').animate({
				scrollTop:755
			},400);
		});
		$('.about_nav_container li').eq(2).click(function(){
			$('html,body').animate({
				scrollTop:1200
			},400);
		});
		$('.about_nav_container li').eq(3).click(function(){
			$('html,body').animate({
				scrollTop:1950
			},400);
		});
		$('.about_nav_container li').eq(4).click(function(){
			$('html,body').animate({
				scrollTop:2530
			},400);
		});
		$('.about_nav_container li').eq(5).click(function(){
			$('html,body').animate({
				scrollTop:3050
			},400);
		});/* click事件  */
		$('.about_explain img').click(function(){
			$('html,body').animate({
				scrollTop:755
			},400);
		});
		
	})(jQuery);
	
//	==================================  安全保障      ==============================
	(function($){
		$('.safeGuard_five_pro .pic .pro').hover(function(event){
			$(this).siblings('.safeGuard_five_pro .pic .color').stop().animate({
				opacity:'1'
			},200);
		},function(event){
			$(this).siblings('.safeGuard_five_pro .pic .color').stop().animate({
				opacity:'.86'
			},200);
		});
		
	})(jQuery);
	

//	==================================  全民理财师  八大支持      ==============================
	(function($){
		var oh = 130;
		$(window).scroll(function(event){
			var h = $(window).scrollTop();
			// console.log(h)
			if( h>=oh ){
				$('.whole_people_nav').css({
					position:'fixed',
					top:'0',
					zIndex:'999999',
					opacity:'.9'
				})
			}else{
				$('.whole_people_nav').css({
					position: 'static',
					opacity:'1'
				})
			}
			if ( h<800 ){
				$('.whole_people_nav_container li').children().removeClass('active');
			}
			else if( h>=1120 && h<1630 ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(0).children().addClass('active');
			}
			else if( h>=1630 && h<2230 ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(1).children().addClass('active');
			}
			else if( h>=2230 && h<2830 ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(2).children().addClass('active');
			}
			else if( h>=2830 && h<3430 ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(3).children().addClass('active');
			}
			else if( h>=3430 && h<4130 ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(4).children().addClass('active');
			}
			else if( h>=4130 && h<4730 ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(5).children().addClass('active');
			}
			else if( h>=4730 && h<5150  ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(6).children().addClass('active');
			}
			else if( h>=5150  ){
				$('.whole_people_nav_container li').children().removeClass('active');
				$('.whole_people_nav_container li').eq(7).children().addClass('active');
			}
		})/*滚轮事件*/
		$('.whole_people_nav_container li').eq(0).click(function(){
			$('html,body').animate({
				scrollTop:1120
			},400);
		});
		$('.whole_people_nav_container li').eq(1).click(function(){
			$('html,body').animate({
				scrollTop:1630
			},400);
		});
		$('.whole_people_nav_container li').eq(2).click(function(){
			$('html,body').animate({
				scrollTop:2230
			},400);
		});
		$('.whole_people_nav_container li').eq(3).click(function(){
			$('html,body').animate({
				scrollTop:2830
			},400);
		});
		$('.whole_people_nav_container li').eq(4).click(function(){
			$('html,body').animate({
				scrollTop:3430
			},400);
		});
		$('.whole_people_nav_container li').eq(5).click(function(){
			$('html,body').animate({
				scrollTop:4130
			},400);
		});
		$('.whole_people_nav_container li').eq(6).click(function(){
			$('html,body').animate({
				scrollTop:4730
			},400);
		});
		$('.whole_people_nav_container li').eq(7).click(function(){
			$('html,body').animate({
				scrollTop:5150
			},400);
		});/* click事件  */
		
	})(jQuery);
	
// ================  常见问题与最新公告/媒体报道  ===========	
	(function($){
		function fnclick_change(tag){
			tag.click(function(){
				$(this).addClass("active").siblings().removeClass("active");
			})
		}
		fnclick_change($(".notice_question_in .sub_tit_item"));
		// 常见问题
		var offon = 0;
		$(".notice_question_in .sub_tit_item_help1").click(function(){
			$(this).addClass("active");
			$(".notice_question_in .sub_tit_item_help2").removeClass("active").children("i").removeClass("activeee");
			$(".notice_question_in .sub_tit_item_help_in").removeClass("active")
		})
		$(".notice_question_in .sub_tit_item_help2").click(function(){
			$(this).addClass("active");
			$(".notice_question_in .sub_tit_item_help1").removeClass("active");
			if(offon == 0) {
				$(this).children("i").addClass("active")
				$(".sub_tit_item_help_down").stop().slideDown(500);
				offon = 1;
			}
			else if(offon == 1) {
				$(this).children("i").removeClass("active").addClass("activeee");
				$(".sub_tit_item_help_down").stop().slideUp(500);
				offon = 0;
			}
		})
		$(".notice_question_in .sub_tit_item_help_in").click(function(){
			$(this).addClass("active").siblings("li").removeClass("active");
		})
	})(jQuery);
	
// ================  投研信息  ===========	
	(function(){
		var index = 0;
		$(".research_cut .item_group li").click(function(){
			$(this).children("a").addClass("active").parent().siblings().children("a").removeClass("active");
			index = $(this).index();
			$(".research_main .item_class").eq(index).addClass("item_class_db").siblings().removeClass("item_class_db");
		})
		
	})(jQuery);
	
	
	
	
	
	
	

 

});