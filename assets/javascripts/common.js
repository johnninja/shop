require.config({
	paths: {
		'lib': 'lib',
		'zepto': '../../bower_components/zepto/zepto.min',
		'IScroll': '../../bower_components/iscroll/build/iscroll-probe',
		'swiper': '../../bower_components/swiper/dist/js/swiper.min',
		'CityPicker': './plugins/city-picker/citypicker'
	},
	shim: {
		'lib': {
			exports: 'lib'
		},
		'zepto': {
			exports: '$'
		},
		'CityPicker': {
			deps: ['$']
		}
	}
});