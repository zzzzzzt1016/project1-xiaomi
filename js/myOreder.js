$(function(){
	$('.plate3_left li').hover(function() {
		if($(this).index() >= 2){
			$('.xldh div').eq($(this).index() - 2).stop().slideUp(500,function(){}).siblings().css('display', 'none');
			$('.xldh div').eq($(this).index() - 2).stop().slideDown(500,function(){}).css('display', 'block');
			
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
	
	
	$('.order_2 li').click(function(){
		$(this).css('color','#ff6700');
		$(this).siblings().css('color','#757575');
		$('.order_3box div').eq($(this).index()).css('display','block')
		$('.order_3box div').eq($(this).index()).siblings().css('display','none')
	})
	
	

	
	
	
	
	
	
	
	
	
})