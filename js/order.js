$(function(){
	$('.Popup_t_l').click(function(){
		$(this).css('color','coral')
		$(this).siblings().css('color','#757575');
		$('.Popup_b_1').css('display','block');
		$('.Popup_b_2').css('display','none');
	})
	$('.Popup_t_r').click(function(){
		$(this).css('color','coral');
		$(this).siblings().css('color','#757575');
		$('.Popup_b_2').css('display','block');
		$('.Popup_b_1').css('display','none');
	})
	
	$('#syyhj').click(function(){
		$('.Popup').css('display','block')
		$('.Popup_back').css('display','block')
	})
	
	$('#bsyyhj').click(function(){
		$('.Popup').css('display','none')
		$('.Popup_back').css('display','none')
	})
	
	$('.plate50_box_2').click(function(){
		$(this).css('border','1px solid red')
	})
	
	
	$('.Popup1_box1_1').click(function(){
		$('.Popup1_box1_2').css({
			top:'-8px',
			color:'coral',
			background: 'white',
			fontSize: '12px',
		})
		$(this).css('border','2px solid coral');
	})
	
	
	$('.plate50_box_21').click(function(){
		$('.Popup1').css('display','block')
		$('.Popup_back').css('display','block')
	});
	$('.plate50_box_2').children('.p3').click(function(){
		$('.Popup1').css('display','block')
		$('.Popup_back').css('display','block')
	});
	
	$('.Popup1_2').children('.span2').click(function(){
		$('.Popup1').css('display','none')
		$('.Popup_back').css('display','none')
	});
	$('.Popup1_1').children('.qx').click(function(){
		$('.Popup1').css('display','none')
		$('.Popup_back').css('display','none')
	});
	
	
	$('.plate50_box_2').children('.p7').click(function(){
		$(this).parent().remove();
	});
	
	
	
	$('.Popup1_2').children('.span1').click(function(){
		var name = $('.Popup1_box1_1').children('input').val()
		var phone = $('.Popup1_box1_3').children('input').val()
		var province = $('.Popup1_box2').children('input').val()
		var Address1 = $('.Popup1_box3').children('textarea').val()
		var addressLabel = $('.Popup1_box4').children('input').val()
		$(`
			<div class="plate50_box_2">
				<p class="p1">${name}</p>
				<p class="p2">${phone}</p>
				<p class="p4">${province}</p>
				<p class="p5">${Address1}</p>
				<p class="p6">${addressLabel}</p>
				<p class="p7">删除</p>
				<p class="p3">修改</p>
			</div>
		
		`).prependTo($('.plate50_box_2s'));
		
		
		$('.plate50_box_2').children('.p7').click(function(){
			$(this).parent().remove();
		});
		
		$('.Popup1').css('display','none');
		$('.Popup_back').css('display','none');
	})
	
	
	
	
	
	
	
})