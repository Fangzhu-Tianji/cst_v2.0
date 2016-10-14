

$(function(){
	 //	顶部和底部显示隐藏
	(function($){
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
	})(jQuery);
	
	//	固定侧边栏事件
	(function($){
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
	})(jQuery);
	
	
//	===================  合格投资者弹窗     ==================
	(function($){
		$('.sbm').click(function(){
			$('#nice_moneyman').css({
				display:'none'
			});
		});
	})(jQuery);
	
//	===================  专题页底部折叠角标     ==================
	(function($){
		// 底部切换
		var onOff = true;
		$('#subject_fixed_infor .fixed_top').click(function(event){
		  	if( onOff ){
		  		$('#subject_fixed_infor .open').css({display:'none',});
		  		$('#subject_fixed_infor .close').css({display:'block'});
		  		$(this).html('点击展开');
		  		onOff = false;
		  	} else {
		  		$('#subject_fixed_infor .open').css({display:'block',});
		  		$('#subject_fixed_infor .close').css({display:'none'});
		  		$(this).html('点击收起');
		  		onOff = true;
		  	}
	  	});
	  	// 底部滚动出现
		$(window).scroll(function(event){
		  	if( $(window).scrollTop() > 300 ){
		  		$('#subject_fixed_infor').fadeIn(400);
		  	}else{
		  		$('#subject_fixed_infor').fadeOut(400);
		  	}
		})
	})(jQuery);

	
	
	
})
