require(['./common'], function(){
	require(['zepto','lib', 'IScroll' ], function($, lib, IScroll){
		$('#list-wrapper').on('click', '.d-like', function(){
			var star = $(this).find('i');
			if (star.hasClass('text-red')) {
				star.addClass('icon-xin1').removeClass('icon-xin5 text-red');
			}else{
				star.addClass('text-red icon-xin5').removeClass('icon-xin1');
			}
		});
		$('#list-wrapper').on('click', '.icon-gengduo', function(){
			$(this).parents('.summary-info').css('height', 'auto');
			$(this).remove();
		});
		var myScroll;
		var loading = $('.loader');
		var testTemp = '<div class="product-content">' +
				'<div class="product-header">'+
					'<h2>生·瓷器<small>手工艺术</small></h2>'+
				'</div>'+
				'<div class="summary-info">'+
					'<p>1976年1月，我到北京探亲，当时，周总理去世不久，人民自发的通过各种形式悼念总理，我亦自觉参与其中。今年是周总理逝世41周年，谨以小诗表达深深地怀念之情。1976年1月，我到北京探亲，当时，周总理去世不久，人民自发的通过各种形式悼念总理，我亦自觉参与其中。今年是周总理逝世41周年，谨以小诗表达深深地怀念之情。</p>'+
				'</div>'+
				'<div class="product-banner"><img src="./assets/images/banner.jpg" alt=""></div>'+
				'<div class="product-price">'+
					'<div class="d-group">'+
						'<div class="d-group-wrapper">'+
							'<div class="d-price">'+
								'<sub>¥</sub>123'+
							'</div>'+
							'<div class="d-like">'+
								'<i class="iconfont icon-xin1"></i>'+
								'2000喜欢'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="buy-btn">'+
						'<a href="#" class="button red">去购买</a>'+
					'</div>'+
				'</div>'+
			'</div>';

		function initScroll(){
			myScroll = new IScroll('#list-wrapper',{
				probeType: 3,
				preventDefault: false
			});

			myScroll.scrollToElement('body');

			myScroll.on('scroll', function(){
				if (this.y < this.maxScrollY + 10) {
					loading.html('<i class="loader-icon"></i><span>释放完成加载！</span>');
				}else if(this.y < this.maxScrollY + 30){
					loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
				}
			});
			myScroll.on('scrollEnd', function(){
				if (this.y <= this.maxScrollY) {
					pullUpAction();
				}
			});

			myScroll.on('refresh', function(){
				loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
			});

			document.addEventListener('touchmove', function(e){e.preventDefault();}, false);
			return myScroll;
		}
		function pullUpAction(){
			loading.html('<i class="loader-icon loading"></i><span>加载中...</span>');
			setTimeout(function(){
				var el, p, i;
				el = $('#list-wrapper .products');

				for (i = 0; i < 4; i++) {
					el.append($(testTemp));
				}
				loading.html('<i class="loader-icon"></i><span>上拉加载更多</span>');
				myScroll.refresh();
			}, 2000);
		}
		initScroll();
		setTimeout(myScroll.refresh.bind(myScroll),400);
	});
});