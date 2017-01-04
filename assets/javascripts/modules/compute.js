define(function(){
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
			this.bindEvent();
		},
		bindEvent: function(){
			var _this = this;
			var price = '';
			if (this.price) {
				price = this.price.text().match(this.reg)[0];
			}

			this.plus.click(function(e){
				var value = parseInt(_this.shower.text());
				if (!_this.enabled || _this.max && (value >= _this.max)) {
					return;
				}
				_this.increase();

				if (_this.price && _this.total) {
					_this.updateTotal(price);
				}
			});
			this.minus.click(function(e){
				var value = parseInt(_this.shower.text());

				if (!_this.enabled || value <= _this.min) {
					return;
				}
				_this.decrease();

				if (_this.price && _this.total) {
					_this.updateTotal(-price);
				}
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
			if (b == this.enabled) {
				return;
			}
			if (b) {
				this.enabled = true;
				this.updateTotal(Number(price)*Number(amount));
			}else{
				this.enabled = false;
				this.updateTotal(-Number(price)*Number(amount));
			}
		}
	};
	return Compute;
});