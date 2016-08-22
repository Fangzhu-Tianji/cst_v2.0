$(function() {
	var num=0;
	var flag=1;
	$('.box').eq(0).removeClass('out');
	$(document).mousewheel(function(event,dalta){
		if(flag==1){
			flag=2;
			$('.box').eq(num).addClass('out');
			num=num-dalta;
			if(num<0){
			num=0;
			}else if(num>5){
			num=5;
			}
			$('.warpbox').stop().animate({
			top:-num*100+'%',
			},1000,function(){
				flag=1;
			});
			$('.nav ul li').eq(num).addClass('current').siblings('li').removeClass('current');
			$('.box').eq(num).removeClass('out');

		}
	})
	
	$('.nav li').bind({
		click:function(){
			$('.box').eq(num).addClass('out');
			var index=$(this).index();
			$('.warpbox').stop().animate({
				top:-index*100+'%',
			},1000);
			$(this).addClass('current').siblings('li').removeClass('current');
			num=index;
			$('.box').eq(num).removeClass('out');
		}
	});



});