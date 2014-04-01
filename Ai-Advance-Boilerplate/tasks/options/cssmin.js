module.exports = {
    minify: {
        expand: true,
        cwd: 'build/css/prefixed/',
        src: ['*.css', '*.resorted.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
    }
}