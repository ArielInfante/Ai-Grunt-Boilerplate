module.exports = {
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
}