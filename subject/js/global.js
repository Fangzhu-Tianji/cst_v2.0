

$(function(){
	 //	顶部和底部显示隐藏
	(function(){
		
		function fnHover(Out,In){
			Out.hover(function(){
				In.stop().fadeIn(600);
			},function(){
				In.stop().fadeOut(600);
			})
		}
		fnHover( $('#header .info .weix'),$('#header .info .weix_bd') );
		fnHover( $('#header .info .weib'),$('#header .info .weib_bd') );
		fnHover( $('#footer .ft_item .wx_tips'),$('#footer .ft_item .wx_tips .tips_bd') );
		fnHover( $('#footer .ft_item .wb_tips'),$('#footer .ft_item .wb_tips .tips_bd') );
		
		
	})();
	
	//	固定侧边栏事件
	(function(){
		
		$('#fix_sidebar a').hover(function(){
			$(this).children().stop().animate({
				left: '-164px'
			},400)
		},function(){
			$(this).children().stop().animate({
				left: '-170px'
			},400)
		});
		
		var h = $(window).height();
		$(window).scroll(function(){
			var h1 = $(window).scrollTop();
			if( h1>h ){
				$('#fix_top').fadeIn(500);
			}else{
				$('#fix_top').fadeOut(500);
			}
		})
		$('#fix_top').click(function(){
			$('html,body').animate({
				scrollTop: '0'
			},500)
		});
	})();
	
	
	
	
	
	
	
})
