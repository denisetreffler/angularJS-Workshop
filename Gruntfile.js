module.exports = function(grunt) {

    // config
    grunt.initConfig({
        sass: {
            all: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'public/styles/workshop.css': 'src/sass/workshop.scss'
                }
            }
        },
        uglify: {
            all: {
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                },
                files: {
                    "public/workshop.js": [
                        'src/app.js',
                        'src/app.routes.js',
                        'src/app.translations.js',
                        'src/modules/**/*.js'
                    ]
                }
            },
            test: {
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                },
                files: {
                    "public/workshop.js": [
                        'src/app.js',
                        'src/app.routes.js',
                        'src/app.translations.js',
                        'src/modules/**/*.js',
                        'src/helper/**/*.js'
                    ]
                }
            }
        },
        copy: {
            files: {
                cwd: 'src/modules',
                src: '**/*.html',
                dest: 'public/partials',
                expand: true
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            all: {
                src: 'src/bower_components/**/*.min.css',
                dest: 'public/styles/styles.css'
            }
        },
        bower_concat: {
            all: {
                dest: 'public/vendor.js',
                bowerOptions: {
                    relative: false
                }
            }
        }
    });

    // import
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass:all', 'uglify:test', 'copy', 'concat:all', 'bower_concat:all']);
    grunt.registerTask('dist', ['sass:all', 'uglify:all', 'copy', 'concat:all', 'bower_concat:all']);
};
