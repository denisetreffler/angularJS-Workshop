module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            all: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'public/workshop.css': 'public/sass/workshop.scss'
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
                    'public/workshop.js': ['app/app.js']
                }
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

    grunt.registerTask('default', ['sass:all', 'uglify:all', 'bower_concat:all']);
    grunt.registerTask('dist', ['sass:all', 'uglify:all', 'bower_concat:all']);
};
