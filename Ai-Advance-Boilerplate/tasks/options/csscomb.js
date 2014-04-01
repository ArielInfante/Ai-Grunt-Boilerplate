module.exports = {
    dynamic_mappings: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '*.min.css', '!*.resorted.css'],
        dest: 'build/css/resorted/',
        ext: '.resorted.css'
    }
}