require.config({
	paths: {
		'lib': 'lib',
		'zepto': '../../bower_components/zepto/zepto.min',
		'IScroll': '../../bower_components/iscroll/build/iscroll'
	},
	shim: {
		'lib': {
			exports: 'lib'
		},
		'zepto': {
			exports: '$'
		}
	}
});
require(['zepto','lib','IScroll', 'load'], function($, lib, IScroll, initScroll){
	initScroll();
});