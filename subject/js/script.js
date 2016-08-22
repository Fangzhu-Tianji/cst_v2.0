
$(function(){
  //奔富2期底部切换
  var onOff = true;
  $('.fixed_top').click(function(event){
  	if( onOff ){
  		$('.fixed_infor .open').css({display:'none',});
  		$('.fixed_infor .close').css({display:'block'});
  		$(this).html('点击展开');
  		onOff = false;
  	} else {
  		$('.fixed_infor .open').css({display:'block',});
  		$('.fixed_infor .close').css({display:'none'});
  		$(this).html('点击收起');
  		onOff = true;
  	}
  })
  
  //奔富2期底部滚动出现
  $(window).scroll(function(event){
  	if( $(window).scrollTop() > 300 ){
  		$('.fixed_infor').fadeIn(400);
  	}else{
  		$('.fixed_infor').fadeOut(400);
  	}
  })
	
  //奔富2期老马识途的动效
	$(window).scroll(function(event){
//	console.log($(window).scrollTop());
		if( $(window).scrollTop() > 3600 ){
			/*$('.lao .footer li').eq(0).stop().fadeIn(400);
			$('.lao .footer li').eq(1).stop().fadeIn(800);
			$('.lao .footer li').eq(2).stop().fadeIn(1200);
			$('.lao .footer li').eq(3).stop().fadeIn(1600);
			$('.lao .footer li').eq(4).stop().fadeIn(2600);
			$('.lao .footer li').eq(5).stop().fadeIn(3000);
			$('.lao .footer li').eq(6).stop().fadeIn(3400);
			$('.lao .footer li').eq(7).stop().fadeIn(3800);
			$('.lao .footer li').eq(8).stop().fadeIn(4800);
			$('.lao .footer li').eq(9).stop().fadeIn(5200);
			$('.lao .footer li').eq(10).stop().fadeIn(5600);
			$('.lao .footer li').eq(11).stop().fadeIn(6000);
			$('.lao .footer li').eq(12).stop().fadeIn(6400);
			$('.lao .footer li').eq(13).stop().fadeIn(6800);
			$('.lao .footer li').eq(14).stop().fadeIn(7200);
			*/
			$('.lao .footer li').eq(0).stop().fadeIn(200,function(){
				$('.lao .footer li').eq(1).stop().fadeIn(200,function(){
					$('.lao .footer li').eq(2).stop().fadeIn(200,function(){
						$('.lao .footer li').eq(3).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(4).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(5).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(6).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(7).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(8).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(9).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(10).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(11).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(12).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(13).stop().fadeIn(200,function(){
							$('.lao .footer li').eq(14).stop().fadeIn(200,function(){
							
							})
							})
							})
							})
							})
							})
							})
							})
							})
							})
							})
						})
					})
				})
			})
		}else{
			$('.lao .footer li').stop().fadeOut(400);
		}
	})
	
	
//	VR专题页
//		普乐方过往已成功项目
	$('.nav3 .project ul li').hover(function(){
			$(this).children().css({transform:'scale(1.1)',transition:'all 2s'});
			$(this).siblings('li').stop().fadeTo(500,0.2);
		},function(){
			$('li').children().css({transform:'scale(1)',transition:'all 2s'});
			$('li').stop().fadeTo(500,1);
		});
	
	
})
