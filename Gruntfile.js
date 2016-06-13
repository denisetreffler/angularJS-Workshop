module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            all: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'public/workshop.css': 'src/sass/workshop.scss'
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
                        'src/modules/**/*.js'
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
        bower_concat: {
            all: {
                dest: 'public/vendor.js',
                bowerOptions: {
                    relative: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass:all', 'uglify:all', 'copy', 'bower_concat:all']);
    grunt.registerTask('dist', ['sass:all', 'uglify:all', 'copy', 'bower_concat:all']);
};
