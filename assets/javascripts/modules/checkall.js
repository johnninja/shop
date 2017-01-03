define(function(){
	function CheckAll(el){
		this.master = document.querySelector(el);
		this.slaves = [];
	}
	CheckAll.prototype = {
		constructor: CheckAll,
		slave: function(selector, callback1, callback2){
			var slaves = document.querySelectorAll(selector);
			this.slaves = [].slice.call(slaves);
			this._initEvent(callback1, callback2);
		},
		_initEvent: function(callback1, callback2){
			var _this = this;
			this.master.onclick = function(){
				if (this.checked) {
					_this._checkAll();
					if (callback1) callback1();
				}else{
					_this._reverseCheck();
					if (callback2) callback2();
				}
			};
			this.slaves.forEach(function(item, index){
				item.onclick = function(){
					if (_this._isAllchecked()) {
						_this.master.checked = true;
					}else{
						_this.master.checked = false;
					}
				};
			});
		},
		_checkAll: function(){
			for (var i = 0; i < this.slaves.length; i++) {
				this.slaves[i].checked = true;
			}
		},
		_reverseCheck: function(){
			for (var i = 0; i < this.slaves.length; i++) {
				this.slaves[i].checked = false;
			}
		},
		_isAllchecked: function(){
			for (var i = 0; i < this.slaves.length; i++) {
				if(!this.slaves[i].checked) return false;
			}
			return true;
		}
	};
	return CheckAll;
});