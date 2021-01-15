$(function() {
	$('.plate3_left li').hover(function() {
		if ($(this).index() >= 2) {
			$('.xldh div').eq($(this).index() - 2).stop().slideUp(500, function() {}).siblings().css('display', 'none');
			$('.xldh div').eq($(this).index() - 2).stop().slideDown(500, function() {}).css('display', 'block');
			console.log($(this).index() - 2)
			$('.xldh div').eq($(this).index() - 2).hover(function() {
				$(this).stop().slideDown(500, function() {}).css('display', 'block');
			}, function() {
				$(this).stop().slideUp(500, function() {});
			})
		}

	}, function() {
		$('.xldh div').eq($(this).index() - 2).stop().slideUp(500, function() {}).css('display', 'none');
	});


	$('#all').hover(function() {
		$('.erji_2').css('display', 'block');
		$('.erji_2').hover(function() {
			$(this).css('display', 'block');
		}, function() {
			$(this).css('display', 'none');
		})
	}, function() {
		$('.erji_2').css('display', 'none');
	});




	$('.erji_2 li').hover(function() {
		$('.erji_1 div').eq($(this).index()).stop().siblings().css('display', 'none');
		$('.erji_1 div').eq($(this).index()).css('display', 'block');
		$('.erji_1 div').eq($(this).index()).hover(function() {
			$(this).css('display', 'block');
			$('.erji_2').css('display', 'block');
		}, function() {
			$(this).css('display', 'none');
			$('.erji_2').css('display', 'none');
		})
	}, function() {
		$('.erji_1 div').eq($(this).index()).css('display', 'none');
	});




	$('.butbot li').click(function() {
		clearInterval(timer1);
		$(this).css('background', 'gray')
		$(this).siblings().css('background', 'gainsboro')
		$('.lunbo_tu div').eq($(this).index()).siblings().css('opacity', '0');
		$('.lunbo_tu div').eq($(this).index()).css('opacity', '1');
	})


	var timer1 = setInterval(function() {
		$('.lunbo_tu div').eq(lEngth).css('opacity', '1');
		$('.lunbo_tu div').eq(lEngth).siblings().css('opacity', '0');
		lEngth--;
		if (lEngth == -1) {
			lEngth = 4;
		}
	}, 2000);


	var lEngth = 0;
	$('.butrgt').click(function() {
		clearInterval(timer1);
		$('.lunbo_tu div').eq(lEngth).css('opacity', '1');
		$('.lunbo_tu div').eq(lEngth).siblings().css('opacity', '0');
		lEngth++;
		if (lEngth == 5) {
			lEngth = 0;
		}
	});


	var lEngth = 3;
	$('.butlet').click(function() {
		clearInterval(timer1);
		$('.lunbo_tu div').eq(lEngth).css('opacity', '1');
		$('.lunbo_tu div').eq(lEngth).siblings().css('opacity', '0');
		lEngth--;
		if (lEngth == -1) {
			lEngth = 4;
		}
	});



	$('.plate5_rgt_7 li').click(function() {
		$(this).css('border', '1px solid coral');
		$(this).css('color', 'coral');
		$(this).siblings().css('border', '1px solid #DCDCDC');
		$(this).siblings().css('color', 'gray');
	})

	$('.plate5_rgt_8 li').click(function() {
		$(this).css('border', '1px solid coral');
		$(this).css('color', 'coral');
		$(this).siblings().css('border', '1px solid #DCDCDC');
		$(this).siblings().css('color', 'gray');
	})














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
			return sty(shi), sty(fen), sty(miao);

		}
		getime1();
		$('#shi').html(sty(shi));
		$('#fen').html(sty(fen));
		$('#miao').html(sty(miao));

		// $('#shijian').html(getime1()) 
	}
	timer = setInterval(getime, 1000);







	$(window).scroll(function() {

		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 500) {
			$('#id').css('display', 'block')
		}
		if ($(window).scrollTop() < 500) {
			$('#id').css('display', 'none')
		}
	})
	$('#id').click(function() {
		$(window).scrollTop(0);
	})

})
