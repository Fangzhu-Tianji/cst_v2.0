$(function(){
	// 注册页面
	(function($){
		// 手机号
		$("#register_form1").validate({
			errorElement: 'span',
	        errorClass: 'validate_txt',
	        focusInvalid: false,
	        ignore: "",
	        rules: {
	        	usertel: {
	        		required: true,
	        		number: true,
	        		rangelength: [11,11]
	        	}
	        },
	        messages: {
	        	usertel: {
	        		required: '请输入11位手机号码',
	        		number: '请输入数字',
	        		rangelength: '请输入正确的长度'
	        	}
	        },
		});
		// 输入密码
		$("#register_form2").validate({
			errorElement: 'span',
	        errorClass: 'validate_txt',
	        focusInvalid: false,
	        ignore: "",
	        rules: {
	            password: {
	           		required: true,
	                minlength: 2,
	                maxlength: 20
	            },
	            "confirm-password": {
	            	equalTo: "#password"
	            }
	        },
	        messages: {
	            password: {
	           		required: '请输入6-20位密码',
	                minlength: '密码不能小于2个字符',
	                maxlength: '密码不能超过20个字符'
	            },
	            "confirm-password": {
	            	equalTo: "两次输入的密码不一致"
	            }
	        },
		});
		
		
		
		
		
		
		
		
	})(jQuery);
})
