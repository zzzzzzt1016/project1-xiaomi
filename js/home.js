$(function(){
	$('.plate3_left li').hover(function() {
		if($(this).index() >= 2){
			// $('.xldh').stop().slideDown(500,function(){}).css('display', 'block');
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
		
		
		$('#plate8_bt1').hover(function(){
			$(this).css('color','coral');
			$('.plate8_2_2').css('display','block')
			$('.plate8_2_3').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		$('#plate8_bt2').hover(function(){
			$(this).css('color','coral');
			$('.plate8_2_3').css('display','block')
			$('.plate8_2_2').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		
		$('#plate9_bt1').hover(function(){
			$(this).css('color','coral');
			$('.plate9_2_2').css('display','block')
			$('.plate9_2_3').css('display','none')
			$('.plate9_2_4').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		$('#plate9_bt2').hover(function(){
			$(this).css('color','coral');
			$('.plate9_2_3').css('display','block')
			$('.plate9_2_2').css('display','none')
			$('.plate9_2_4').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		$('#plate9_bt3').hover(function(){
			$(this).css('color','coral');
			$('.plate9_2_4').css('display','block')
			$('.plate9_2_2').css('display','none')
			$('.plate9_2_3').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		
		$('#plate10_bt1').hover(function(){
			$(this).css('color','coral');
			$('.plate10_2_2').css('display','block')
			$('.plate10_2_3').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		$('#plate10_bt2').hover(function(){
			$(this).css('color','coral');
			$('.plate10_2_3').css('display','block')
			$('.plate10_2_2').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		
		$('#plate11_bt1').hover(function(){
			$(this).css('color','coral');
			$('.plate11_2_2').css('display','block')
			$('.plate11_2_3').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		$('#plate11_bt2').hover(function(){
			$(this).css('color','coral');
			$('.plate11_2_3').css('display','block')
			$('.plate11_2_2').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		
		$('#plate12_bt1').hover(function(){
			$(this).css('color','coral');
			$('.plate12_2_2').css('display','block')
			$('.plate12_2_3').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		$('#plate12_bt2').hover(function(){
			$(this).css('color','coral');
			$('.plate12_2_3').css('display','block')
			$('.plate12_2_2').css('display','none')
		},function(){
			$(this).css('color','black');
		})
		
		
		$('.lunbo_1 li').click(function(){
			
			$(this).css('background','gainsboro')
			$(this).siblings().css('background','gray')
			$('.lunbo div').eq($(this).index()).siblings().css('opacity','0');
			$('.lunbo div').eq($(this).index()).css('opacity','1');
		})
		
		var lEngth = 0;
		var timer1 = setInterval(function(){
			$('.lunbo div').eq(lEngth).css('opacity','1');
			$('.lunbo div').eq(lEngth).siblings().css('opacity','0');
			lEngth--;
			if(lEngth == -1){
				lEngth = 4;
			}
		},2000);
		
		
		
		$('#butr').click(function(){
			clearInterval(timer1);
			$('.lunbo div').eq(lEngth).css('opacity','1');
			$('.lunbo div').eq(lEngth).siblings().css('opacity','0');
			lEngth++;
			if(lEngth == 5){
				lEngth = 0;
			}
		});
		
			$('#butl').click(function (){
				clearInterval(timer1);
				$('.lunbo div').eq(lEngth).css('opacity','1');
				$('.lunbo div').eq(lEngth).siblings().css('opacity','0');
				lEngth--;
				if(lEngth == -1){
					lEngth = 4;
				}
			});

	
	$('.erji_2 li').hover(function() {
			$('.erji_1 div').eq($(this).index()).stop().siblings().css('display', 'none');
			$('.erji_1 div').eq($(this).index()).css('display', 'block');
			$('.erji_1 div').eq($(this).index()).hover(function(){
				$(this).css('display', 'block');
			},function(){
				$(this).css('display', 'none');
			})
		}, function() {
			$('.erji_1 div').eq($(this).index()).css('display', 'none');
		});
	
	
	
	
	function sty(n) {
		return n < 10 ? '0' + n : n;
	}
	shi = 5;
	fen = 50;
	miao = 50;
	function getime() {
		function getime1() {
			miao -= 1
			if (miao == 0) {
				fen -= 1
				miao = 60
			}
			if (fen == 0) {
				shi -= 1
				fen = 60
			}
			return sty(shi),sty(fen),sty(miao);
			
		}
		getime1();
		$('#shi').html(sty(shi));
		$('#fen').html(sty(fen));
		$('#miao').html(sty(miao));
		
		// $('#shijian').html(getime1()) 
	}
	timer = setInterval(getime, 1000);
	
	
	$('#but2').click(function(){
		$('.plate6_2_2_img').animate({left:-984})
	})
	$('#but1').click(function(){
		$('.plate6_2_2_img').animate({left:0})
	})
	
	
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