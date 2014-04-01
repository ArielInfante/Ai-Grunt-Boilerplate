//Put all of the created files in a build folder
module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        mkdir: {
            all: {
                options: {
                    create: [
                        'css',
                        'js',
                        'images',
                        'build',
                        'build/css/prefixed',
                        'build/css/resorted',
                        'build/js',
                        'build/images'
                    ]
                }
            }
        },

        haml: {
            dist: {
                files: {
                    'index.html':'index.haml'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'index.html'
                }
            }
        },

        csscomb: {
            dynamic_mappings: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '*.min.css', '!*.resorted.css'],
                dest: 'build/css/resorted/',
                ext: '.resorted.css'
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'build/css/resorted/*.resorted.css', //The source files are entered in the css folder
                dest: 'build/css/prefixed/' //The output files are entered in the build/css file
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'build/css/prefixed/',
                src: ['*.css', '*.resorted.css', '!*.min.css'],
                dest: 'build/css/',
                ext: '.min.css'
            }
        },

        jshint: {
            beforeconcat: ['js/jshint/*.js'],
            afterconcat: ['js/jshint/*.concat.js']
        },

        concat: {
            dist: {
                src: [
                    'js/libs/*.js',
                    'js/*.js'
                ],
                dest: 'build/js/script.js'
            }
        },

        uglify: {
            build: {
                src: 'build/js/script.js',
                dest: 'build/js/script.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        },

        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.svg'],
                    dest: 'build/images/',
                    ext: 'min.svg'
                }]
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['build/**'],
                    dest: 'finalbuild/'
                }]
            }
        },

        compress: {
            main: {
                options: {
                    archive: 'finalbuild.zip'
                },
                files: [{
                    flatten: false,
                    src: ['finalbuild/**'],
                    dest: 'finalbuild/'
                }]
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            html: {
                files: ['*.haml', '*.html'],
                tasks: ['haml'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['css/*.css'],
                tasks: ['comb', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify', 'jshint'],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: ['images/**/*.{png.jpg,gif}', 'images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './'
                }
            }
        },

        shell: {
            multiple: {
                command: [
                    // Install dependencies, directories and files
                    /*
                    npm install --save-dev load-grunt-tasks
                    npm install grunt-contrib-jshint --save-dev
                    npm install grunt-contrib-uglify --save-dev
                    npm install grunt-contrib-watch --save-dev
                    npm install grunt-contrib-copy --save-dev
                    npm install grunt-contrib-concat --save-dev
                    npm install grunt-contrib-cssmin --save-dev
                    npm install grunt-contrib-connect --save-dev
                    npm install grunt-contrib-imagemin --save-dev
                    npm install grunt-contrib-htmlmin --save-dev
                    npm install grunt-contrib-haml --save-dev
                    npm install grunt-contrib-sass --save-dev
                    npm install grunt-contrib-compress --save-dev
                    npm install grunt-svgmin --save-dev
                    npm install grunt-autoprefixer --save-dev
                    npm install grunt-csscomb --save-dev
                    npm install grunt-mkdir --save-dev
                    npm install grunt-git --save-dev
                     */
                ]
            }
        },
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('install', ['shell']);

    grunt.registerTask('dir', ['mkdir']);

    grunt.registerTask('default', ['haml', 'htmlmin', 'csscomb', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify', 'imagemin', 'svgmin']);

    grunt.registerTask('dev', ['connect', 'watch']);

    grunt.registerTask('final', ['haml', 'htmlmin', 'csscomb', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'copy', 'compress']);
}