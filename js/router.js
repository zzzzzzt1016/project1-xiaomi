$(function(){
	
	
	
	$('.butbot li').click(function(){
		clearInterval(timer1);
		$(this).css('background','white')
		$(this).siblings().css('background','black')
		$('.lunbo_tu div').eq($(this).index()).siblings().css('opacity','0');
		$('.lunbo_tu div').eq($(this).index()).css('opacity','1');
	})
	
	
	var timer1 = setInterval(function(){
		$('.lunbo_tu div').eq(lEngth).css('opacity','1');
		$('.lunbo_tu div').eq(lEngth).siblings().css('opacity','0');
		lEngth--;
		if(lEngth == -1){
			lEngth = 4;
		}
	},5000);
	
	
	var lEngth = 0;
	$('.butrgt').click(function(){
		clearInterval(timer1);
		$('.lunbo_tu div').eq(lEngth).css('opacity','1');
		$('.lunbo_tu div').eq(lEngth).siblings().css('opacity','0');
		lEngth++;
		if(lEngth == 4){
			lEngth = 0;
		}
	});
	
	
	var lEngth = 2;
		$('.butlet').click(function (){
			clearInterval(timer1);
			$('.lunbo_tu div').eq(lEngth).css('opacity','1');
			$('.lunbo_tu div').eq(lEngth).siblings().css('opacity','0');
			lEngth--;
			if(lEngth == -1){
				lEngth = 3;
			}
		});
		
		
		
		$(window).scroll(function(){
			
			console.log($(window).scrollTop());
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