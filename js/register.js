$(function(){
	function pValue1 (){
		$('.diqu').click(function(){
			$('.xldq').css('display','block');
			$('.xldq p').click(function(){
				var a = $(this).text();
				$('.diqu_1').text(a);
				$('.xldq').css('display','none');
			});
			
		})
	}
	pValue1 ();
	
	
	function pValue2 (){
		$('.phone_1').click(function(){
			$('.xlphone').css('display','block');
			$('.xlphone p').click(function(){
				var a = $(this).text();
				$('.phone_1').text(a);
				$('.xlphone').css('display','none');
			});
			$('.xlphone').blur = function(){
				$(this).css('display','none');
			}
		})
	}
	pValue2 ();
	
	
	
	
	
	
	var oSjh = document.getElementById('sjh')
	var oSjhp = document.getElementById('sjhp')
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