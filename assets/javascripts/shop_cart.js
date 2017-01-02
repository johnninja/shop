require(['./common'], function(){
	require(['zepto'], function($){

		function Compute(options){
			this.plus = options.plus;
			this.minus = options.minus;
			this.shower = options.shower;
			this.total = options.total;
			this.price = options.price;
			this.min = options.min || 0;
			this.max = options.max || null;
			this.reg = /((\-)?\d+(\.\d+)?)/g;
			this.enabled = true;
		}

		Compute.prototype = {
			constructor: Compute,
			init: function(){
				// var price = this.price.text().match(this.reg);
				// var amount = this.shower.text();
				// var total = this.total.html();
				// var value = total.match(this.reg);

				// this.total.html(total.replace(this.reg, Number(price) * Number(amount) + Number(value)));
				this.bindEvent();
			},
			bindEvent: function(){
				var _this = this;
				var price = this.price.text().match(this.reg)[0];

				this.plus.click(function(e){
					var value = parseInt(_this.shower.text());
					if (!_this.enabled || _this.max && (value >= _this.max)) {
						return;
					}
					_this.increase();
					_this.updateTotal(price);
				});
				this.minus.click(function(e){
					var value = parseInt(_this.shower.text());

					if (!_this.enabled || value <= _this.min) {
						return;
					}
					_this.decrease();
					_this.updateTotal(-price);
				});
			},
			increase: function(){
				var value = parseInt(this.shower.text());
				this.shower.html(++value);
			},
			decrease: function(){
				var value = parseInt(this.shower.text());
				this.shower.html(--value);
			},
			updateTotal: function(val){
				var total = this.total.html();
				var value = total.match(this.reg);
				this.total.html(total.replace(this.reg, Number(val) + Number(value)));
			},
			changeStatus: function(b){
				var price = this.price.text().match(this.reg)[0];
				var amount = this.shower.text();

				if (b) {
					this.enabled = true;
					this.updateTotal(Number(price)*Number(amount));
				}else{
					this.enabled = false;
					this.updateTotal(-Number(price)*Number(amount));
				}
			}
		};
		var computeBoxes = {};
		$('.product-list').each(function(index, item){
			var checkbox = $(this).find('input[type=checkbox]');

			computeBoxes[index] = new Compute({
				minus: $(item).find('.minus'),
				plus: $(item).find('.plus'),
				shower: $(item).find('.shower'),
				price: $(item).find('.product-price'),
				total: $('.check-price span'),
			});
			
			computeBoxes[index].init();

			if (checkbox.is(':checked')) {
				computeBoxes[index].changeStatus(true);
			}else{
				computeBoxes[index].changeStatus(false);
			}
			checkbox.click(function(e){
				if ($(this).is(':checked')) {
					computeBoxes[index].changeStatus(true);
				}else{
					computeBoxes[index].changeStatus(false);
				}
			});

		});

		/*
		* plus
		* minus
		* shower
		* total
		*/
	});
});