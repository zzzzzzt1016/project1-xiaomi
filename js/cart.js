$(function() {
	//全选 或者 全部不选
	$('#checkbox').click(function() {
		//获取全选  这个复选框是否被选中
		//只要选中 那么下面的复选框都要选中
		//var flag  =  $(this).is(':checked');
		//console.log(flag)
		//获取全选  这个复选框是否被选中
		//只要选中 那么下面的复选框都要选中
		var flag = $(this).prop('checked');
		$('.cart_2_check').children().each(function() {
			//获取所有的复选框并且循环
			this.checked = flag; //this 表示当前循环的那个元素
		});
	});
	//判断是否全选
	function ifAllChecked() {
		//先获得全选下的 复选框
		//当个数为4 全选的复选框被选中
		var checkedBoxs = $('.cart_2_check').children();
		var sum = checkedBoxs.size(); //4个复选框
		var k = 0;
		var numSl = 0;
		var numSl2 = 0;
		checkedBoxs.each(function(index, dom) {
			$('.xznum').html(k);
			var SL = parseInt($(dom).parent().siblings('.cart_2_num').children('.cart_2_num1').find('input').val());
			numSl = numSl + parseInt(SL);
			$('.allnum').html(numSl);
			if ($(dom).prop('checked')) {
				//找到选择中商品的个数  然后把这些数加起来
				var SL2 = parseInt($(dom).parent().siblings('.cart_2_num').children('.cart_2_num1').find('input').val());
				numSl2 = numSl2 + parseInt(SL2);
				k++;
				$('.xznum').html(numSl2);
			}
		});
		if (k == sum) {
			//如果选中的复选框等于总数的时候
			$('#checkbox').prop('checked', true);
		} else {
			$('#checkbox').prop('checked', false);
		}
	}
	ifAllChecked();
	//当点击下面的复选框的时候使用上面ifAllChecked这个方法
	$('.cart_2_check').click(function() {
		ifAllChecked();
		productCount();
	});
	$('#checkbox').click(function() {
		ifAllChecked();
		productCount();
	});
	
	//删除单个    并且返回所剩个数
	function deleteId() {
		var checkedBoxs = $('.cart_2_check').children();
		var sum = checkedBoxs.size(); //4个复选框
		var j = 0;
		// $('.allnum').html(sum)
		$('.cart_2_action').click(function() {
			$(this).parent().remove();
			productCount();
			sum--;
			// $('.allnum').html(sum);
			// var w = $(this).parent().find('.cart_2_check').children().prop('checked')
			//判断删除的这个 是否选中
			if ($(this).parent().find('.cart_2_check').children().prop('checked')) {
				var q = $('.xznum').html();
				$('.xznum').html(q - 1);
			}
			ifAllChecked();
		});
	}
	deleteId();

	//点击增加 
	$('.cart_2_num1').find('.add').click(function() {
		//调用函数 函数会根据true还是flase判断增加还是减少
		changeNumber(this, true);
		ifAllChecked();
		deleteId();
	});
	//点击减少
	$('.cart_2_num1').find('.reduce').click(function() {
		//调用函数
		changeNumber(this, false);
		ifAllChecked();
		deleteId();
	});

	function changeNumber(dom, flag) {
		//获取到中间的文本框
		var inputId = $(dom).parent().find('input');
		//获取这个文本框的值
		var value = inputId.val();

		if (flag) {
			value++;
		} else {
			value--;
			if (value <= 0) {
				value = 1;
				alert('修改数量不能小于0');
			}
		}
		inputId.val(value); //设置文本框的值
		productCount();
	}

	//计算总价与小计  productCount产品个数
	function productCount() {
		var allSum = 0;
		$('.cart_2').each(function(i, dom) {
			//计算小计
			var num = $(dom).children('.cart_2_num').children('.cart_2_num1').find('input').val();
			var price = $(dom).children('.cart_2_price').children('span').text();
			var sum = num * price;
			$(dom).children('.cart_2_total').children('span').html(sum.toFixed(1));
			$('.money').html(allSum);
			if ($(dom).children('.cart_2_check').children().prop('checked')) {
				allSum = allSum + sum
				$('.money').html(allSum);
			}
		});
	}
	productCount();
	var arr = [{
			oId: 0,
			img: 'img/q1.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q2.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q3.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q4.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q5.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q6.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q7.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/q8.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/sjk1.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},
		{
			oId: 0,
			img: 'img/sjk3.jpg',
			p1: '7号彩虹电池(10粒)',
			p2: '9.9元',
			p3: '192.1万人好评',
			p4: '加入购物车'
		},

	];

	for (var i = 0; i < arr.length; i++) {
		$(
			`
			
			<li>
				<a href="">
					<img src="${arr[i].img}" >
					<p class="p1">${arr[i].p1}</p>
					<p class="p2">${arr[i].p2}</p>
					<p class="p3">${arr[i].p3}</p>
					<p class="p4">${arr[i].p4}</p>
				</a>
			</li>
			
			`
		).appendTo($('.plate41_2 ul'))
	};






	$(window).scroll(function() {


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
