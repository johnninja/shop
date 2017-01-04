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
					'src/styles/style.css': 'src/less/style.less',
					'assets/javascripts/plugins/city-picker/citypicker.css': 'src/less/citypicker.less'
				}
			},
			production: {
				options: {
					plugins: [
						new (require('less-plugin-autoprefix'))(),
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
			all: ['./assets/**/*.js'],
			options: {
				ignores: ['./assets/javascripts/libs/**.js','./assets/**/plugins/**/*.js'],
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
		copy: {
			main: {
				files: [
					{
						expand: true,
						src: ['assets/**'],
						dest: './build/'
					},
					{
						expand: true,
						src: ['bower_components/**'],
						dest: './build/'
					}
				]
			},
			html: {
				expand: false,
				src: ['./*.html'],
				dest: './build/',
				options: {
					process: function(content, srcpath){
						content.replace(/<script type="text\/javascript" src="http:\/\/127\.0\.0\.1\:1337\/livereload\.js"><\/script>/ig, '');
						return content.replace(/src\/styles\/style\.css/g, 'assets/styles/style.css');
					}
				}
			}
		},
		connect: {
			server: {
				options: {
					open: true,
					hostname: '0.0.0.0',
					port: '8000'
				}
			}
		},
		watch: {
			options: {
				livereload: 1337
			},
			scripts: {
				files: '**/*.js',
				tasks: ['jshint'],
				options: {
					interrupt: true
				}
			},
			less: {
				files: 'src/less/*',
				tasks: ['less:development']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['less:development', 'connect:server', 'jshint']);
	grunt.registerTask('prod', ['less:production','uglify']);
	grunt.registerTask('build', ['copy']);
	grunt.registerTask('default', ['dev','watch']);
}