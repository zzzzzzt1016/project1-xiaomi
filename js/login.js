




$(function(){
	
	
	
	
	function fn (){
		$('#a1').hover(function(){
			$(this).css('color','coral');
		})
		$('#a1').click(function(){
			$('.login_b_1').css('display','block');
			$('.login_b_2').css('display','none');
			$(this).css('color','coral');
			$('#a2').css('color','black');
		})
		$('#a2').hover(function(){
			$(this).css('color','coral');
		})
		$('#a2').click(function(){
			$('.login_b_2').css('display','block');
			$('.login_b_1').css('display','none');
			$(this).css('color','coral');
			$('#a1').css('color','black');
			
		})
	}
	fn();
	
	
	
	
	
	
	
	var oMm = document.getElementById('text2');
	var oMmp = document.getElementById('text2p');
	oMm.onblur = function(){
		
		if(oMm.value.length >= 6 && oMm.value.length <= 16){
			oMmp.innerHTML = '密码安全'
			oMmp.style.color = 'green'
		}else{
			oMmp.innerHTML = '请输入6~16位'
			oMmp.style.color = 'red'
		}
		
	}
	
	
	var oSjh = document.getElementById('text1')
	var oSjhp = document.getElementById('text1p')
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
				oSjhp.innerHTML = '手机号正确';
				oSjhp.style.color = 'green';
			}else{
				oSjhp.innerHTML = '提示:11位纯数字手机号';
				oSjhp.style.color = 'red';
			}	
		}else{
			oSjhp.innerHTML = '请输入11位手机号';
			oSjhp.style.color = 'red';
		}
		
	}
})