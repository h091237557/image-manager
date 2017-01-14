module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                includePaths: []
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: false
                },
                files: {
                    'demo/css/main.css' : 'demo/scss/main.scss',
                    'image-manager-plugin/css/main.css' : 'image-manager-plugin/scss/main.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    './demo/css/main.css': './demo/css/main.css',
                    './image-manager-plugin/css/main.css': './image-manager-plugin/css/main.css'
                }
            }
        },
        watch: {
            grunt: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js'],
                tasks: ['build']
            },
            sass: {
                files: ['./demo/scss/**/*.scss', './image-manager-plugin/scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'autoprefixer']);
    grunt.registerTask('default', ['build', 'watch']);
};