module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			options: {
				modifyVars: {
					imgPath: '"../../assets/images"'
				}
			},
			development: {
				files: {
					'src/styles/style.css': 'src/less/style.less'
				}
			},
			production: {
				options: {
					plugins: [
						new (require('less-plugin-autoprefix'))({browsers: ['last 2 version']}),
						new (require('less-plugin-clean-css'))({advance: true})
					],
					modifyVars: {
						imgPath: '"../images"'
					}
				},
				files: {
					'assets/styles/style.css': 'src/less/style.less'
				}
			}
		},
		jshint: {
			all: ['src/**/*.js'],
			options: {
				browser: true,
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>*/'
			},
			lib: {
				files: {
					'./assets/javascripts/lib.js': ['./src/javascripts/lib.js']
				}
			}
		},
		watch: {
			scripts: {
				files: '**/*.js',
				tasks: ['jshint'],
				options: {
					interrupt: true
				}
			},
			less: {
				files: 'src/less/*',
				tasks: ['less:development'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['less:development', 'jshint']);
	grunt.registerTask('prod', ['less:production','uglify']);
	grunt.registerTask('default', ['dev','watch']);
}