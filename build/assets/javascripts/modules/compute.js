define(function(){
	/*
	* @param {object} plus 加号按钮
	* @param {object} minus 减号按钮
	* @param {object} shower 数量显示区
	* @param {object} total 总价显示区
	* @param {object} price 单价显示区
	* @param {number} min 最小值
	* @param {number} max 最大值
	* @param {boolean} enabled 是否可以加减 default true
	* @param {function} increaseCallback 加法回调（回调接受update方法，用于更新页面显示）
	* @param {function} decreaseCallback 减法回调（回调接受update方法，用于更新页面显示）
	*/

	//demo
	// var myCompute = new Compute({
	// 	plus: $('.plus'),		//必填
	// 	minus: $('.minus'),		//必填
	// 	shower: $('.shower'),	//必填
	// 	total: $('.total'),		//选填
	// 	price: $('.price'),		//选填
	// 	min: 0,					//选填
	// 	max: 100,				//选填
	// 	enabled: true,			//选填
	// 	increaseCallback: function(update){			//选填
	// 		$.ajax({
	// 			success: function(data){
	// 				if (data.status == 200) {
	// 					update()	//后台返回成功后，再更新页面显示
	// 				}
	// 			}
	// 		})
	// 	},
	// 	decreaseCallback: function... //与增加类似	//选填
	// });

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
		this.increaseCallback = options.increaseCallback || null;
		this.decreaseCallback = options.decreaseCallback || null;
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
				var value = parseInt(_this.shower.eq(0).text());
				if (!_this.enabled || _this.max && (value >= _this.max)) {
					return;
				}
				if (_this.increaseCallback) {
					_this.increaseCallback(function(){
						_this.increase();

						if (_this.price && _this.total) {
							_this.updateTotal(price);
						}
					});
					return;
				}
				_this.increase();

				if (_this.price && _this.total) {
					_this.updateTotal(price);
				}
			});
			this.minus.click(function(e){
				var value = parseInt(_this.shower.eq(0).text());

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
			var value = parseInt(this.shower.eq(0).text());
			this.shower.html(++value);
		},
		decrease: function(){
			var value = parseInt(this.shower.eq(0).text());
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