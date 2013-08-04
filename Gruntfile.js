module.exports = function(grunt) {

    grunt.initConfig({
        compass: {                              // Task
            dev: {                   // Target
                options: {              // Target options
                    sassDir: 'www/assets/sass',
                    cssDir: 'www/assets/css',
                    importPath: [
                        'www/assets/components/twitter-bootstrap-sass/vendor/assets/stylesheets'
                    ]
                }
            },
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'www/assets/sass',
                    cssDir: 'www/assets/css',
                    importPath: [
                        'www/assets/components/twitter-bootstrap-sass/vendor/assets/stylesheets'
                    ],
                    outputStyle: 'compressed',
                    noLineComments: true,
                    quiet: true,
                    environment: 'production'
                }
            }
        },
        watch: {
            'observe': {
                files: [
                    'www/assets/js/*.js',
                    'www/assets/sass/*.scss',
                    'www/*.html'
                ],
                tasks: ['default'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                    interrupt: true
                }
            },
            'reload': {
                files: [
                    'www/**/*.html',
                    'www/**/*.json'
                ],
                tasks: ['default'],
                    options: {
                        // Start a live reload server on the default port 35729
                        livereload: true,
                        interrupt: true
                    }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('production', ['compass:dist']);

};