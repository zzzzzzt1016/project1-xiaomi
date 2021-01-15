$(function(){
	$('.plate3_left li').hover(function() {
		if($(this).index() >= 2){
			$('.xldh div').eq($(this).index() - 2).stop().slideUp(500,function(){}).siblings().css('display', 'none');
			$('.xldh div').eq($(this).index() - 2).stop().slideDown(500,function(){}).css('display', 'block');
			console.log($(this).index() - 2)
			$('.xldh div').eq($(this).index() - 2).hover(function(){
				$(this).stop().slideDown(500,function(){}).css('display', 'block');
			},function(){
				$(this).stop().slideUp(500,function(){});
			})
		}
			
		}, function() {
			$('.xldh div').eq($(this).index() - 2).stop().slideUp(500,function(){}).css('display', 'none');
		});
		
		
		$('#all').hover(function(){
				$('.erji_2').css('display', 'block');
				$('.erji_2').hover(function(){
					$(this).css('display', 'block');
				},function(){
					$(this).css('display', 'none');
				})
			},function(){
				$('.erji_2').css('display', 'none');
			});
				
				
		
		
		$('.erji_2 li').hover(function() {
				$('.erji_1 div').eq($(this).index()).stop().siblings().css('display', 'none');
				$('.erji_1 div').eq($(this).index()).css('display', 'block');
				$('.erji_1 div').eq($(this).index()).hover(function(){
					$(this).css('display', 'block');
					$('.erji_2').css('display', 'block');
				},function(){
					$(this).css('display', 'none');
					$('.erji_2').css('display', 'none');
				})
			}, function() {
				$('.erji_1 div').eq($(this).index()).css('display', 'none');
			});
		
		
		$('.plate5_1').click(function(){
				
				// this.isStatus 为undefined 转为布尔值 = false  取反 = true
				// 点击不同的标题，this指向的对象会变，新对象this.isStatus的值是新的
				// 点击相同的标题，this.isStatus原先已赋值true，取反 =false
				
				this.isStatus = !this.isStatus;
				
				if(this.isStatus){
					$(this).siblings().css('display','none')
					$(this).find('.iconfont').css({
						'color':'#ff6700',
						'border-color':'#ff6700'
					})
					$(this).find('.iconfont').html('&#xe62f');
				}else{
					$(this).siblings().css('display','block')
					$(this).find('.iconfont').css({
						'color':'#B0B0B0',
						'border-color':'#B0B0B0'
					})
					$(this).find('.iconfont').html('&#xe858');
				}
				
			})
	
	// var aa = true;
	
	// $('.plate5_1').click(function(){
	// 	if(aa){
	// 		$('.plate5_2').css('display','none');
	// 		$('.plate5_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate5_2').css('display','block')
	// 		$('.plate5_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	
	// $('.plate16_1').click(function(){
	// 	if(aa){
	// 		$('.plate16_2').css('display','none');
	// 		$('.plate16_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate16_2').css('display','block')
	// 		$('.plate16_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	
	// $('.plate17_1').click(function(){
	// 	if(aa){
	// 		$('.plate17_2').css('display','none');
	// 		$('.plate17_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate17_2').css('display','block')
	// 		$('.plate17_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate18_1').click(function(){
	// 	if(aa){
	// 		$('.plate18_2').css('display','none');
	// 		$('.plate18_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate18_2').css('display','block')
	// 		$('.plate18_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate19_1').click(function(){
	// 	if(aa){
	// 		$('.plate19_2').css('display','none');
	// 		$('.plate19_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate19_2').css('display','block')
	// 		$('.plate19_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate20_1').click(function(){
	// 	if(aa){
	// 		$('.plate20_2').css('display','none');
	// 		$('.plate20_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate20_2').css('display','block')
	// 		$('.plate20_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate21_1').click(function(){
	// 	if(aa){
	// 		$('.plate21_2').css('display','none');
	// 		$('.plate21_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate21_2').css('display','block')
	// 		$('.plate21_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate22_1').click(function(){
	// 	if(aa){
	// 		$('.plate22_2').css('display','none');
	// 		$('.plate22_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate22_2').css('display','block')
	// 		$('.plate22_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate23_1').click(function(){
	// 	if(aa){
	// 		$('.plate23_2').css('display','none');
	// 		$('.plate23_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate23_2').css('display','block')
	// 		$('.plate23_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	// $('.plate24_1').click(function(){
	// 	if(aa){
	// 		$('.plate24_2').css('display','none');
	// 		$('.plate24_1 span').css('border-color','red')
	// 		aa = false;
	// 	}else{
	// 		$('.plate24_2').css('display','block')
	// 		$('.plate24_1 span').css('border-color','gray')
	// 		aa = true;
	// 	}
		
	// });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(window).scroll(function(){
		
		if($(window).scrollTop() > 500){
			$('#id').css('display','block')
		}
		if($(window).scrollTop() < 500){
			$('#id').css('display','none')
		}
	})
	$('#id').click(function(){
		$(window).scrollTop(0);
	})
	
})