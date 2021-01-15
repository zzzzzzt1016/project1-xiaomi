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
		
		
		var oSjh = document.getElementById('phone')
		var oSjhp = document.getElementById('plate90_box1_4')
		var recharge = document.getElementById('Recharge')
		oSjh.onblur = function(){
			var isno = true;
			var isno1 = true;
			if(oSjh.value.length != 11 || oSjh.value[0] != 1 ){
				isno = false;
			}
			for(var i = 1; i<oSjh.value.length;i++){
				if(!(oSjh.value[i] <= 9 && oSjh.value[i] >= 0)){
					isno1 = false;
					break;
				}
			}
			if(isno){
				if(isno1){
					oSjhp.innerHTML = '此号码可以充值';
					oSjhp.style.color = 'green';
					recharge.style.background = '#FF6700';
				}else{
					oSjhp.innerHTML = '提示:11位纯数字手机号';
					oSjhp.style.color = 'red';
				}	
			}else{
				oSjhp.innerHTML = '请输入11位手机号';
				oSjhp.style.color = 'red';
			}
			
		}
	
	$('.plate90_box1_2 li').click(function(){
		$(this).css('border','1px solid red');
		$(this).siblings().css('border','1px solid #DCDCDC');
		var cost = 0.984 * $(this).children('i').text()
		console.log(cost)
		$('#cost').text(cost)
	})
	
	
	
	
	
	
	

	
	
})