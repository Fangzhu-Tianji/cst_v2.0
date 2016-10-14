$(function(){
	
//	======================   合格投资者认定      ================
	(function($){
		$('.nice_moneyman_2_1 a').click(function(){
	        if( $('.nice_moneyman_2_1 .first input').prop('checked') && ($('.nice_moneyman_2_1 .center input').prop('checked')||$('.nice_moneyman_2_1 .last input').prop('checked'))  ){
	            $(this).attr({
	                'href':'nice_moneyman_person.html'
	            });
	        }else {
	        	alert( '您好，经研究您不适合投资私募');
	            $(this).attr({
	                'href':'javascript:;'
	            });
	        }
			
		});
		$('.nice_moneyman_2_2 a').click(function(){
	        if( $('.nice_moneyman_2_2 .one input').prop('checked') && $('.nice_moneyman_2_2 .two input').prop('checked') ){
	            $(this).attr({
	                'href':'nice_moneyman_team.html'
	            });
	        }else {
	        	alert( '您好，经研究您不适合投资私募');
	            $(this).attr({
	                'href':'javascript:;'
	            });
	        }
			
		});
		
	})(jQuery);
	
//	========================  调查问卷     ============================
	(function($){
	    var sum = 0;
	    $('.nice_moneyman_into_per .nice_into_main p input[type=radio]').click(function(){
	    	$(this).parent('p').addClass('active').siblings('p').removeClass('active');
	    });
	    $('.nice_moneyman_into_per .nice_btn').click(function(){
	    	sum = parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="a"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="b"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="c"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="d"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="e"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="f"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="g"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="h"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="i"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="j"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="k"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="l"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="m"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_per .nice_into_main p input:radio[name="n"]:checked').val() )
//	    	console.log(sum);
	    	$('.nice_moneyman_into_per').css({
	    		display:'none'
	    	});
	    	$('.nice_moneyman_type_per').css({
	    		display:'block'
	    	});
			$(window).scrollTop(0);
	    	if( sum >= 40 && sum <= 55 ){
	    		$('.nice_moneyman_type_per .type').html('稳健型投资人');
	    		$('.nice_moneyman_type_per .tip').html('投资建议：适合中等风险级别产品');
	    		$('.nice_moneyman_type_per .nice_footer .tit').html('特点: 具备一定的股票市场投资经验, 投资期限偏重中长期, 注重稳定的投资收入和长期资本增值之间的平衡, 希望在风险较小的情况下获得一定回报。适合投资的基金产品: 不适合高风险的基金产品, 但适合投资于中等风险和低风险基金产品。');	
	    	}else if ( sum > 55 ){
	    		$('.nice_moneyman_type_per .type').html('激进型投资人');
	    		$('.nice_moneyman_type_per .tip').html('投资建议：适合高风险级别产品');
	    		$('.nice_moneyman_type_per .nice_footer .tit').html('特点: 具备股票市场投资经验和长期投资目标; 无需从投资中获得稳定的现金流以支付生活费用; 渴望较高的投资收益, 并愿意为此承担较大的风险。');	
	    	}else if ( sum < 40 ){
	    		$('.nice_moneyman_type_per .type').html('保守型投资人');
	    		$('.nice_moneyman_type_per .tip').html('投资建议：适合低风险级别产品');
	    		$('.nice_moneyman_type_per .nice_footer .tit').html('特点: 不具备或仅具备有限的股票市场投资经验, 投资期限较短, 希望从投资中获得稳定的现金流, 作为生活费用的重要来源; 最关心投资的账面价值是否受损, 对投资回报的要求不高。');	
	    	}
	    	
	    });/*填坑1*/
	    
	    var sums = 0;
	    $('.nice_moneyman_into_team .nice_into_main p input[type=radio]').click(function(){
	    	$(this).parent('p').addClass('active').siblings('p').removeClass('active');
	    });
	    $('.nice_moneyman_into_team .nice_btn').click(function(){
	    	sums = parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="a"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="b"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="c"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="d"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="e"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="f"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="g"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="h"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="i"]:checked').val() )
	    		+ parseInt( $('.nice_moneyman_into_team .nice_into_main p input:radio[name="j"]:checked').val() );
//	    	console.log(sums);
	    	$('.nice_moneyman_into_team').css({
	    		display:'none'
	    	});
	    	$('.nice_moneyman_type_team').css({
	    		display:'block'
	    	});
			$(window).scrollTop(0);
	    	if( sums >= 20 && sums <= 40 ){
	    		$('.nice_moneyman_type_team .type').html('稳健型投资人');
	    		$('.nice_moneyman_type_team .tip').html('投资建议：适合中等风险级别产品');
	    		$('.nice_moneyman_type_team .nice_footer .tit').html('特点: 具备一定的股票市场投资经验, 投资期限偏重中长期, 注重稳定的投资收入和长期资本增值之间的平衡, 希望在风险较小的情况下获得一定回报。适合投资的基金产品: 不适合高风险的基金产品, 但适合投资于中等风险和低风险基金产品。');	
	    	}else if ( sums > 40 ){
	    		$('.nice_moneyman_type_team .type').html('激进型投资人');
	    		$('.nice_moneyman_type_team .tip').html('投资建议：适合高风险级别产品');
	    		$('.nice_moneyman_type_team .nice_footer .tit').html('特点: 具备股票市场投资经验和长期投资目标; 无需从投资中获得稳定的现金流以支付生活费用; 渴望较高的投资收益, 并愿意为此承担较大的风险。');	
	    	}else if ( sums < 20 ){
	    		$('.nice_moneyman_type_team .type').html('保守型投资人');
	    		$('.nice_moneyman_type_team .tip').html('投资建议：适合低风险级别产品');
	    		$('.nice_moneyman_type_team .nice_footer .tit').html('特点: 不具备或仅具备有限的股票市场投资经验, 投资期限较短, 希望从投资中获得稳定的现金流, 作为生活费用的重要来源; 最关心投资的账面价值是否受损, 对投资回报的要求不高。');	
	    	}
	    	
	    })
	    
		
	})(jQuery);
	
	
	
	
	
	
})
