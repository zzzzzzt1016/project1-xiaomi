$(function(){
	var isNo = true;
	function fn (){
		
		if(isNo){
			$('#shxx').css('display','none');
			$('.plate60_1_b').slideDown(500,function(){});
			$('.plate60_1_b_r').slideDown(500,function(){});
			isNo = false;
			
		}else{
			$('#shxx').css('display','block');
			$('.plate60_1_b').slideUp(500,function(){});
			$('.plate60_1_b_r').slideUp(500,function(){});
			isNo = true;
		}
		
	}
	$('#xiangqing').click(fn);
	
	$('.plate60 li').click(function(){
		$('.beijing').fadeIn(500,function(){});
	})
	
	
	$('#danchu').click(function(){
		$('.beijing').fadeOut(500,function(){});
	})
	
	
})